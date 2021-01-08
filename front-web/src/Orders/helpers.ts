import { Product } from "./types";

export function checkIsSelected(selectedProducts: Product[], produtc: Product) {
    return selectedProducts.some(item => item.id === produtc.id);
}
export function formatPrice(price: number) {
    const formatter = new Intl.NumberFormat('pt-BR',
        {
            style: 'currency',
            currency: 'BRL'
        });
    return formatter.format(price);
}