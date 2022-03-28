import { ProductType } from "../types/product";
import instance from "./config";

export const list = () => {
    const url = "/products";
    return instance.get(url);
}
export const remove = (id: number) => {
    const url = `/product/${id}`;
    return instance.delete(url);
}
export const add = (product: ProductType) => {
    const url = `/product/`;
    return instance.post(url, product)
}
export const read = (id: any) => {
    const url = `/product/${id}`;
    return instance.get(url)
}
export const update = (product: any) => {
    const url = `/product/${product._id}`;
    return instance.put(url, product)
}