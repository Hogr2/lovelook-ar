import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import type { Product, Category } from "@/data/products";

type ProductRow = {
  id: string;
  name: string;
  price: number;
  image_url: string;
  description: string;
  frame_material: string;
  lens_type: string;
  color: string;
  size: string;
  categories: { name_ar: string } | null;
};

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: async (): Promise<Product[]> => {
      const { data, error } = await supabase
        .from("products")
        .select(
          "id, name, price, image_url, description, frame_material, lens_type, color, size, categories(name_ar)",
        )
        .eq("is_active", true)
        .order("sort_order", { ascending: true });

      if (error) throw error;

      return (data as unknown as ProductRow[]).map((row) => ({
        id: row.id,
        name: row.name,
        price: Number(row.price),
        category: (row.categories?.name_ar ?? "طبية") as Category,
        image: row.image_url,
        description: row.description,
        specs: {
          frame: row.frame_material,
          lens: row.lens_type,
          color: row.color,
          size: row.size,
        },
      }));
    },
  });
}