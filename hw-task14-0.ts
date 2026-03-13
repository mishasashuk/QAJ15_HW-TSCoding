// 1.  Создайте функцию, которая будет принимать в себя массив значений и возвращать только те, в которых заданное (второй параметр, по умолчанию - 4) количество букв
function filterByLetter(arr: string[], letters: number = 4): string[] {
  const result = arr.filter(item => item.length === letters);
  if (result.length === 0) {
    throw new Error('Ничего не найдено');
  }
  return result;
}
const words = ['apple', '123', 'test1', '1test', 'test'];
console.log(filterByLetter(words));
