// Создайте функцию, которая создает массив с 10 случайными числами и возвращает произведение 3 самых больших значений

const arrayOfThree = (size: number = 10, maxValue: number = 100, multiply: number = 3) => {
  let arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(Math.floor(Math.random() * maxValue) + 1);
  }
  let resultArray = arr.splice(0, multiply);
  const result = resultArray.reduce((acc, value) => acc * value);
  // arr.sort((a, b) => b - a);
  return result;
};
console.log(arrayOfThree());
