import { authRequest } from "../utils/request";

export const register = async ({ email, password }) => {
    authRequest("/signup", "POST", { email, password });
};