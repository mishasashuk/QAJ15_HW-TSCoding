// Создать функцию которая будет принимать входящее значение и добавлять к нему слово "супер"
function addSuper(value: string) {
  const regexCyrillicLatin = /^[a-zA-ZА-Яа-яёЁ]+$/;
  if (!regexCyrillicLatin.test(value)) {
    throw new Error('Строка должна содержать только кириллицу или латиницу');
  }
  return `супер${value}`;
}
console.log(addSuper('котик'));
