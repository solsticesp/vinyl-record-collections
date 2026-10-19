// const supabaseUrl = "https://eheypdtrchjkjjutvmwf.supabase.co/rest/v1/";
import { supabaseUrl, supabaseKey } from "../supabase";


export default async function request(path = "/", method = "GET", data = null, opts = {}) {
    const options = {
        headers: {
            apikey: supabaseKey,
        },
        ...opts
    };

    if (method !== "GET") {
        options.method = method;
    }

    if (data) {
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(data);
    }

    const response = await fetch(`${supabaseUrl}${path}`, options);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const text = await response.text();
    return text ? JSON.parse(text) : null;
}

