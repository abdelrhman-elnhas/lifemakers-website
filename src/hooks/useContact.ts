import { useMutation, useQuery } from "@tanstack/react-query";
import { createClient } from "@/lib/supabase/client";
import { ContactFormValues } from "@/schemas/contact.schema";


export function useMessages() {
    return useQuery({
        queryKey: ["contact"],
        queryFn: async () => {
            const supabase = createClient();
            const { data, error } = await supabase.from('contact').select('*');
            if (error) throw new Error(error.message);
            return data;
        }
    })
}

export function useSubmitMessage() {
    return useMutation({
        mutationFn: async (data: ContactFormValues) => {
            const supabase = createClient();
            const { error } = await supabase.from('contact').insert([data]);
            if (error) throw new Error(error.message);
        }
    })
}