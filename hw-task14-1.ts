// 0. Реализовать класс калькулятор, с минимум следующими методами: сложение, вычитание, умножение, деление. Эта задача нам пригодится впоследствии
class Calculator {
  add(...a: number[]) {
    return a.reduce((acc, current) => acc + current, 0);
  }
  subtract(a:number, b:number) {
    return a - b;
  }
  multiply(...a: number[]) {
    const defolt = a.length === 0 ? 0 : 1;
    return a.reduce((acc, current) => acc * current, defolt);
  }
  divide(a: number, b: number) {
    if (b === 0) {
      throw Error('Ошибка: деление на ноль');
    }
    return a / b;
  }
}
const calc = new Calculator();

console.log(calc.add(4, 26, 7));
console.log(calc.multiply(2));

// const arr = [24, 5, 7, 52, 9];
// const [sum1, ...sum2] = arr;
// console.log(sum1, sum2);
