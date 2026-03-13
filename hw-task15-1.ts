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

const users: User[] = JSON.parse(readFileSync('users.json', 'utf8'));
