// Создайте функцию для подсчета стоимости товаров в корзине. На входе функция принимает массив объектов со свойствами name, price, quantity

interface CartItem {
    name: string;
    price: number;
    quantity: number;
}

function calculateTotal(cart: CartItem[]): number {
    return cart.reduce((total: number, item: CartItem): number => {
        return total + (item.price * item.quantity);
    }, 0);
}

// Пример использования:
const cart: CartItem[] = [
    { name: 'Apple', price: 10, quantity:2 },
    { name: 'Banana', price: 2, quantity: 1 },
    { name: 'Orange', price: 6, quantity: 1 }
];

const total: number = calculateTotal(cart);
console.log(total);