import request from "../utils/request";

export const getAll = (accessToken) => {
    return request("/records", "GET", null, {
        headers: {
            ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {})
        }
    });
}