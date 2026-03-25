// 0. Модифицировать функцию подсчета стоимости товаров из прошлого задания.Теперь для расчета стоимости, товары должны соответствовать хотя бы одному из условий:
// - товар в наличии
//     - стоимость товаров одного вида выше 500
// Пример входных данных:

interface Product {
  name: string;
  price: number;
  quantity: number;
  inStock: boolean;
}

function calcTotalCost(products: Product[]): number {
  return products.reduce((total: number, product: Product): number => {
    const productTotal: number = product.price * product.quantity;
    if (product.inStock || productTotal > 500) {
      return total + productTotal;
    }
    return total;
  }, 0);
}

const products: Product[] = [
  { name: 'A', price: 100, quantity: 2, inStock: true },
  { name: 'B', price: 40, quantity: 5, inStock: false },
  { name: 'C', price: 10, quantity: 1, inStock: true },
  { name: 'D', price: 200, quantity: 3, inStock: false }
];

console.log(calcTotalCost(products));
