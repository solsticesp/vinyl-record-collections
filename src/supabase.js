const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

const restUrl = `${supabaseUrl}/rest/v1`;
const authUrl = `${supabaseUrl}/auth/v1`;

export {
    restUrl,
    authUrl,
    supabaseKey,
};