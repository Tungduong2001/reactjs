export const currencyPrice = function (price: number) {
    price = Number(price);
    return price.toLocaleString("vi", { style: "currency", currency: "VND" });
};