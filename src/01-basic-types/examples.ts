// Примеры базовых типов в TypeScript

// 1. Примитивные типы
const stringExample: string = "Это строка";
const numberExample: number = 42;
const booleanExample: boolean = true;
const nullExample: null = null;
const undefinedExample: undefined = undefined;

// 2. Массивы
const numberArray: number[] = [1, 2, 3, 4, 5];
const stringArray: Array<string> = ["один", "два", "три"];

// 3. Кортежи (Tuples)
const tuple: [string, number] = ["возраст", 25];

// 4. Enum
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}
const myDirection: Direction = Direction.Up;

// 5. Any и Unknown
const anyValue: any = "можно присвоить что угодно";
const unknownValue: unknown = 42; // более безопасная альтернатива any

// 6. Void
function logMessage(message: string): void {
  console.log(message);
}

// 7. Never
function throwError(message: string): never {
  throw new Error(message);
}

// 8. Object
const user: { name: string; age: number } = {
  name: "Иван",
  age: 30
};

// 9. Union Types
type StringOrNumber = string | number;
const mixed: StringOrNumber = Math.random() > 0.5 ? "строка" : 42;

// 10. Literal Types
type DiceValue = 1 | 2 | 3 | 4 | 5 | 6;
const diceRoll: DiceValue = 4; 