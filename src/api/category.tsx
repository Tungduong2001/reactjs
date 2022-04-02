import instance from "./config";

export const listCategory = () => {
    const url = `/category`;
    return instance.get(url);
}
export const addCategory = (category: any) => {
    const url = `/category`;
    return instance.post(url, category);
}
export const removeCategory = (id: any) => {
    const url = `/category/${id}`;
    return instance.delete(url);
}
export const productCategory = (id: any) => {
    const url = `/category/${id}`
    return instance.get(url)
}