// Решения заданий по базовым типам TypeScript

// Задание 1: Типизация переменных
const userName: string = "Иван";
const userAge: number = 25;
const isStudent: boolean = true;
const nullValue: null = null;
const undefinedValue: undefined = undefined;

// Задание 2: Работа с массивами
const numbers: number[] = [1, 2, 3, 4, 5];
const strings: Array<string> = ["a", "b", "c"];
numbers.push(6);
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
const joined = strings.join(", ");

// Задание 3: Кортежи
const userInfo: [string, number, boolean] = ["Иван", 25, true];
// Это вызовет ошибку:
// userInfo = [25, "Иван", true];

// Задание 4: Enum
enum WeekDay {
  Monday = 1,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function getDayNumber(day: WeekDay): number {
  return day;
}

// Задание 5: Union Types
function convertToString(value: number | string): string {
  return String(value);
}

// Задание 6: Literal Types
type TShirtSize = 'S' | 'M' | 'L' | 'XL';

function getShirtDescription(size: TShirtSize): string {
  const sizes = {
    'S': 'Маленький размер',
    'M': 'Средний размер',
    'L': 'Большой размер',
    'XL': 'Очень большой размер'
  };
  return sizes[size];
}

// Задание 7: Object Types
interface User {
  name: string;
  age: number;
  email: string;
}

function validateUser(user: User): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return (
    user.name.length >= 2 &&
    user.age >= 18 &&
    emailRegex.test(user.email)
  );
}

// Задание 8: Any и Unknown
function safelyConvertToString(value: unknown): string {
  if (typeof value === 'string') {
    return value;
  }
  if (value === null || value === undefined) {
    return '';
  }
  return String(value);
}

// Задание 9: Void и Never
function logInfo(info: string): void {
  console.log(`[INFO]: ${info}`);
}

function throwCustomError(errorMessage: string): never {
  throw new Error(errorMessage);
}

// Задание 10: Практическое применение
interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

function calculateTotalPrice(product: Product): number {
  const basePrice = product.price * product.quantity;
  if (product.discount) {
    return basePrice * (1 - product.discount);
  }
  return basePrice;
}

function applyDiscount(product: Product, discount: number): Product {
  if (discount < 0 || discount > 1) {
    throw new Error("Скидка должна быть между 0 и 1");
  }
  return {
    ...product,
    discount
  };
} 