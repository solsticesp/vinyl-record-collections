import { authRequest } from "../utils/request";

export const register = async ({ email, password }) => {
    return await authRequest("/signup", "POST", {
        email,
        password,
    });
};

export const login = async ({ email, password }) => {
    return await authRequest("/token?grant_type=password", "POST", {
        email,
        password,
    })
};