import request from "../utils/request";

export const getAll = (userId, accessToken) => {
    return request(`/favourites?user_id=eq.${userId}`, "GET", null,
        {
            headers: {
                ...getAuthHeader(accessToken)
            }
        })
}

export const create = (recordId, userId, accessToken) => {
    return request("/favourites", "POST",
        {
            user_id: userId,
            record_id: recordId
        }, {
        headers: {
            ...getAuthHeader(accessToken)
        }
    })
}

export const remove = (recordId, userId, accessToken) => {
    return request(`/favourites?user_id=eq.${userId}&record_id=eq.${recordId}`, "DELETE", null,
        {
            headers: {
                ...getAuthHeader(accessToken)
            }
        })
}

function getAuthHeader(accessToken) {
    return {
        ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {})
    };
}
