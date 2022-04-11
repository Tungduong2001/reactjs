import instance from "./config";


export const listSlide = () => {
    const url = `/slide`;
    return instance.get(url);
}
export const addSlide = (slide: any) => {
    const url = `/slide`;
    return instance.post(url, slide);
}
export const removeSlide = (id: any) => {
    const url = `/slide/${id}`;
    return instance.delete(url);
}
export const updateSlide = (slide: any) => {
    const url = `/slide/${slide._id}`
    return instance.put(url, slide)
}

export const getOne = (id: any) => {
    const url = `/slide/${id}`;
    return instance.get(url)
}