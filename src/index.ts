// Пример использования типов в TypeScript

// Определение интерфейса
interface MyUser {
  id: number;
  name: string;
  email: string;
  age?: number; // Опциональное поле
}

// Функция с типизированными параметрами и возвращаемым значением
function createUser(name: string, email: string): MyUser {
  return {
    id: Math.floor(Math.random() * 1000),
    name,
    email
  };
}

// Пример использования типизированного массива
const users: MyUser[] = [];

// Добавление пользователей
users.push(createUser("Иван", "ivan@example.com"));
users.push(createUser("Мария", "maria@example.com"));

// Функция с обобщенным типом (generic)
function getFirst<T>(array: T[]): T | undefined {
  return array.length > 0 ? array[0] : undefined;
}

// Вывод информации
console.log("Первый пользователь:", getFirst(users));
console.log("Все пользователи:", users); 