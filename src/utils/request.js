// import { data } from "react-router";
import { restUrl, authUrl, supabaseKey } from "../supabase";

async function baseRequest(url, path = "/", method = "GET", data = null, opts = {}) {
    const options = {
        ...opts,
        headers: {
            ...opts.headers,
            apikey: supabaseKey,
            Prefer: "return=representation",
        },
        
    };

    if (method !== "GET") {
        options.method = method;
    }

    if (data) {
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(data);
    }

    const response = await fetch(`${url}${path}`, options);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    if (response.status === 204) {
        return null;
    }

    return response.json();
}

export default async function request(path = "/", method = "GET", data = null, opts = {}) {
    return baseRequest(restUrl, path, method, data, opts);
}

export const authRequest = async (path = "/", method = "GET", data = null, opts = {}) => {
    return baseRequest(authUrl, path, method, data, opts)
}

