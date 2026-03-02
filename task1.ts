// Создайте функцию, которая создает массив с 10 случайными числами и возвращает произведение 3 самых больших значений

const arrayOfThree = () => {
  let arr = [];
  for(let i = 0; i < 10; i++){
  arr.push(Math.floor(Math.random() * 100) + 1);
  }
  console.log(arr);
  arr.sort((a, b) => b - a);
  return arr[0] * arr[1] * arr[2];
}
console.log(arrayOfThree());