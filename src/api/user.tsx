import { UserType } from "../types/user";
import instance from "./config";


export const signup = (user: any) => {
    const url = "/signup";
    return instance.post(url, user)
}

export const signin = (user: any) => {
    const url = "/signin"
    return instance.post(url, user)
}

export const ListUsers = () => {
    const url = "/users"
    return instance.get(url)
}

export const removeUser = (id: any) => {
    const url = `/users/${id}`;
    return instance.delete(url);
}