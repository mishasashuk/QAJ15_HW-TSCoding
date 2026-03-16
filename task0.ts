// Создайте функцию для эмуляции броска кубика.На входе - количество граней. На выходе - результат броска.Реализация должна работать только со следующим количеством граней(но в будущем должно быть легко расширить этот набор): 2, 4, 6, 8, 10, 12, 20, 100

const validValues = [2, 4, 6, 8, 10, 12, 20, 100];

const rollDice = (side: number) => {
  if (!validValues.includes(side)){
    throw new Error (`Invalid side number. Use: ${validValues.join(', ')}`);
  }
  return Math.floor(Math.random() * side) + 1;
}
console.log(rollDice(11));