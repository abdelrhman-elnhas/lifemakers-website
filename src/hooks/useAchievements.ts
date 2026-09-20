import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { createClient } from '@/lib/supabase/client'
import { AchievementData } from '@/types/achievements'
import { deleteImages, uploadImages } from '@/lib/supabase/uploadImages'

const QUERY_KEY = ['achievements']

// READ
export function useAchievements() {
    const supabase = createClient()
    return useQuery({
        queryKey: QUERY_KEY,
        queryFn: async () => {
            const { data, error } = await supabase
                .from("achievements")
                .select("*");
            if (error) throw new Error(error.message);
            return data as AchievementData[]
        },
    })
}

// CREATE
export function useAddAchievement() {
    const supabase = createClient()
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: async ({ achievementItem, files }: {
            achievementItem: Omit<AchievementData, 'images'>
            files: FileList
        }) => {
            let imageUrls: string[] = []
            if (files && files.length > 0) {
                imageUrls = await uploadImages(files, 'achievements')
            }

            const { data, error } = await supabase.from('achievements').insert({ ...achievementItem, images: imageUrls }).select()
            if (error) throw error
            return data
        },
        onSuccess: () => queryClient.invalidateQueries({ queryKey: QUERY_KEY })
    })
}

// UPDATE
export function useUpdateAchievement() {
    const supabase = createClient()
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: async ({
            id,
            achievement, files, removedImages
        }: {
            id: string
            achievement: Partial<AchievementData>,
            files?: FileList,
            removedImages?: string[]
        }) => {


            if (removedImages && removedImages.length > 0) {
                await deleteImages(achievement.images!, 'achievements')
            }


            let newImageUrls: string[] = []
            if (files && files.length > 0) {
                newImageUrls = await uploadImages(files, 'achievements')
            }

            const finalImages = [...(achievement.images ?? []), ...newImageUrls]


            const { data, error } = await supabase.from("achievements").update({ ...achievement, images: finalImages }).eq('id', id).select().single();
            if (error) throw error
            return data as AchievementData
        },
        onSuccess: () => queryClient.invalidateQueries({ queryKey: QUERY_KEY })
    })
}

// DELETE
export function useDeleteAchievement() {
    const supabase = createClient()
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: async (achievement: AchievementData) => {
            if (achievement.images && achievement.images.length > 0) {
                await deleteImages(achievement.images, 'achievements')
            }

            const { error } = await supabase.from('achievements').delete().eq('id', achievement.id)
            if (error) throw error
        },
        onSuccess: () => queryClient.invalidateQueries({ queryKey: QUERY_KEY })
    })
}