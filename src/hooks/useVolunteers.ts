import { useMutation, useQuery } from "@tanstack/react-query";
import { createClient } from "@/lib/supabase/client";
import type { VolunteerFormValues } from "@/schemas/volunteer-schema";


export function useVolunteers(){
    return useQuery({
        queryKey: ["volunteers"],
        queryFn: async () => {
            const supabase = createClient();
            const { data, error } = await supabase.from("volunteering").select("*");
            if (error) throw new Error(error.message);
            return data;
        }
    })
}

export function useSubmitVolunteer() {
    return useMutation({
        mutationFn: async (data: VolunteerFormValues) => {
            const supabase = createClient();
            const { error } = await supabase.from("volunteering").insert([data]);
            if (error) throw new Error(error.message);
        },
    });
}