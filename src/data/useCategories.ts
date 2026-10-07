import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";

export type CategoryRow = {
  id: string;
  slug: string;
  name_ar: string;
  sort_order: number;
};

export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async (): Promise<CategoryRow[]> => {
      const { data, error } = await supabase
        .from("categories")
        .select("id, slug, name_ar, sort_order")
        .order("sort_order", { ascending: true });

      if (error) throw error;
      return data;
    },
  });
}