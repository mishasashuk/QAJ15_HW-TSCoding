// Для оплаты корпоративного инструмента нам нужно узнать сколько у нас пользователей с разными ролями, т.к.разные роли нуждаются в разных видах подписки
// На входе у нас.json файл с данными пользователей содержащий свойства: id, username, role
// На выходе нам нужен объект вида:
// {
//     role_1: {
//         count: 5,
//             users: [{ id, username }, { id, username }, ...]
//     },
//     role_1: {
//         count: 20,
//             users: [{ id, username }, { id, username }, ...]
//     },
//     ...
// }

import { readFileSync } from 'fs';

const user: User[] = JSON.parse(readFileSync('user.json', 'utf8'));

type User = {
  id: number;
  username: string;
  role: string;
};

type Result = {
  [role: string]: {
    count: number;
    users: Omit<User, 'role'>[];
  };
};

const groupedUsers = user.reduce<Result>((acc, { role, id, username }) => {
  if (!acc[role]) {
    acc[role] = { count: 0, users: [] };
  }
  acc[role].count++;
  acc[role].users.push({ id, username });
  return acc;
}, {});

// Вывод через console.dir
console.dir(groupedUsers, {
  depth: null
});
