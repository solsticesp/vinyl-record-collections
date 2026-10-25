import request from "../utils/request";

export const getAll = (accessToken, userId) => {
    return request(`/records?user_id=eq.${userId}`, "GET", null, {
        headers: {
            ...getAuthHeader(accessToken),
        },
    });
};

export const getRecord = (recordId) => {
    return request(`/records?id=eq.${recordId}&select=*,categories(id,name)`, "GET", null);
}

export const create = (data, accessToken, userId) => {
    return request("/records", "POST", {
        ...data,
        user_id: userId,
    }, {
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