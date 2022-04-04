import { ProductType } from "../types/product";
import instance from "./config";
import { isAuthenticate } from "../utils/localStorage";

export const list = () => {
    const url = "/products";
    return instance.get(url);
}
export const remove = (id: number) => {
    const url = `/product/${id}`;
    return instance.delete(url);
}
export const add = (product: ProductType) => {
    const { token, user } = isAuthenticate()
    const url = `/product/${user._id}`;
    return instance.post(url, product, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
}
export const read = (id: any) => {
    const url = `/product/${id}`;
    return instance.get(url)
}
export const update = (product: any) => {
    const url = `/product/${product._id}`;
    return instance.put(url, product)
}

export const searchProduct = (key: string) => {
    const url = `/search?q=${key}`;
    return instance.post(url)
}