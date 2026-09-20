// lib/supabase/uploadImages.ts
import { createClient } from '@/lib/supabase/client'

export async function uploadImages(files: FileList | File[], bucket: string): Promise<string[]> {
    const supabase = createClient()
    const fileArray = Array.from(files).filter((file): file is File => file instanceof File)

    if (fileArray.length === 0) return []

    const uploadPromises = fileArray.map(async (file) => {
        const fileExt = file.name.split('.').pop()
        const fileName = `${crypto.randomUUID()}.${fileExt}`

        const { error } = await supabase.storage
            .from(bucket)
            .upload(fileName, file)

        if (error) throw error

        const { data } = supabase.storage
            .from(bucket)
            .getPublicUrl(fileName)

        return data.publicUrl
    })

    return Promise.all(uploadPromises)
}

export async function deleteImages(imageUrls: string[], bucket: string) {
    if (!imageUrls || imageUrls.length === 0) return

    const supabase = createClient()

    const filePaths = imageUrls
        .filter(Boolean)
        .map((url) => {
            const parts = url.split(`/${bucket}/`)
            return parts[1]
        })
        .filter(Boolean) as string[]

    if (filePaths.length === 0) return

    const { error } = await supabase.storage
        .from(bucket)
        .remove(filePaths)

    if (error) throw error
}