import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createClient } from "@/lib/supabase/client";
import { CasesFormValues } from "@/schemas/cases.schema";
import { deleteImages, uploadImages } from "@/lib/supabase/uploadImages";

const QUERY_KEY = ['cases']


export function useCases() {
    return useQuery({
        queryKey: QUERY_KEY,
        queryFn: async () => {
            const supabase = createClient();
            const { data, error } = await supabase.from('cases').select('*');
            if (error) throw new Error(error.message);
            return data;
        }
    })
}

export function useSubmitCases() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: async ({ casesItem, files }: {
            casesItem: Omit<CasesFormValues, 'images' | 'imageFiles'>
            files: FileList
        }) => {
            let imageUrls: string[] = []
            if (files && files.length > 0) {
                imageUrls = await uploadImages(files, 'cases')
            }

            const supabase = createClient();
            const { data, error } = await supabase.from('cases').insert([{ ...casesItem, images: imageUrls }]);
            if (error) throw new Error(error.message);
            return data;
        },
        onSuccess: () => queryClient.invalidateQueries({ queryKey: QUERY_KEY })

    })
}
export function useUpdateCases() {
    const queryClient = useQueryClient()
    const supabase = createClient();

    return useMutation({
        mutationFn: async ({
            id,
            caseItem, files, removedImages
        }: {
            id: string
            caseItem: Partial<CasesFormValues>,
            files?: FileList,
            removedImages?: string[]
        }) => {
            if (removedImages && removedImages.length > 0) {
                await deleteImages(removedImages, 'cases')
            }

            let newImageUrls: string[] = []
            if (files && files.length > 0) {
                newImageUrls = await uploadImages(files, 'cases')
            }

            const safeImages = Array.isArray(caseItem.images) ? caseItem.images : []
            const finalImages = [...safeImages, ...newImageUrls]

            const { data, error } = await supabase.from("cases").update({ ...caseItem, images: finalImages }).eq('id', id).select().single(); if (error) throw error
            return data as CasesFormValues
        },
        onSuccess: () => queryClient.invalidateQueries({ queryKey: QUERY_KEY })
    })
}

export function useDeleteCases() {
    const supabase = createClient()
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: async (caseItem: CasesFormValues) => {
            const safeImages = Array.isArray(caseItem.images) ? caseItem.images : []
            if (safeImages.length > 0) {
                await deleteImages(safeImages, 'cases')
            }

            if (!caseItem.id) throw new Error("Case ID is missing")
            const { error } = await supabase.from('cases').delete().eq('id', caseItem.id)
            if (error) throw error
        },
        onSuccess: () => queryClient.invalidateQueries({ queryKey: QUERY_KEY })
    })
}