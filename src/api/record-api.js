import request from "../utils/request";

export const getAll = (accessToken) => {

    return request("/records", "GET", null, {
        headers: {
            ...getAuthHeader(accessToken)
        }
    });
}

export const create = (data, accessToken) => {
    return request("/records", "POST", data, {
        headers: {
            ...getAuthHeader(accessToken)
        }
    })
}

export const update = (id, data, accessToken) => {
    return request(`/records?id=eq.${id}&select=*`, "PATCH", data, {
        headers: {
            ...getAuthHeader(accessToken),
        },
    });
};

export const remove = (id, accessToken) => {
    return request(`/records?id=eq.${id}`, "DELETE", null, {
        headers: {
            ...getAuthHeader(accessToken),
        },
    })
}

function getAuthHeader(accessToken) {
    return {
        ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {})
    }
}