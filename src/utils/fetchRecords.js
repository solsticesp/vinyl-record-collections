import { supabaseKey, supabaseUrl } from "../supabase";

async function fetchRecords() {
    const response = await fetch(`${supabaseUrl}/records?select=*,categories(id,name)`, {
        headers: {
            apikey: supabaseKey,
        }
    })

    const data = await response.json();
    return data;
}

export { fetchRecords };