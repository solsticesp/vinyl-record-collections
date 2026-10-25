import { authRequest } from "../utils/request";

export const register = async ({ email, password, first_name, last_name }) => {
    return await authRequest("/signup", "POST", {
        email,
        password,
        data: {
            first_name,
            last_name
        }

    });
};

export const login = async ({ email, password }) => {
    return await authRequest("/token?grant_type=password", "POST", {
        email,
        password,
    })
};

export const logout = async (accessToken) => {
    return authRequest("/logout", "POST", null, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
}
