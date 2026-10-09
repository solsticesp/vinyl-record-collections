import { supabaseKey, supabaseUrl } from "../supabase";

async function fetchCategories() {
    const response = await fetch(
            `${supabaseUrl}/categories?select=*`,
            {
                headers: {
                    apikey: supabaseKey,
                },
            }
        );
        if (!response.ok) {
            throw new Error("Failed to fetch categories");
        }
        const data = await response.json();
        return(data)
}   

export { fetchCategories }