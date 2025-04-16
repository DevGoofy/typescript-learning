# TypeScript Learning Project

Проект для изучения TypeScript.

## Структура проекта

Проект разделен на тематические модули:

1. **Базовые типы** (`src/01-basic-types/`)
   - Примитивные типы
   - Массивы и кортежи
   - Enum
   - Any и Unknown
   - Void и Never
   - Object Types
   - Union Types
   - Literal Types

2. **Интерфейсы** (`src/02-interfaces/`)
   - Определение интерфейсов
   - Опциональные свойства
   - Readonly свойства
   - Расширение интерфейсов
   - Индексные сигнатуры

3. **Функции** (`src/03-functions/`)
   - Типы функций
   - Параметры и возвращаемые значения
   - Перегрузка функций
   - This в функциях
   - Стрелочные функции

4. **Классы** (`src/04-classes/`)
   - Основы классов
   - Наследование
   - Модификаторы доступа
   - Абстрактные классы
   - Паттерны проектирования

5. **Generics** (`src/05-generics/`)
   - Обобщенные типы
   - Ограничения типов
   - Обобщенные классы
   - Обобщенные интерфейсы
   - Utility Types

6. **Продвинутые типы** (`src/06-advanced-types/`)
   - Union и Intersection Types
   - Type Guards
   - Conditional Types
   - Mapped Types
   - Template Literal Types

7. **Декораторы** (`src/07-decorators/`)
   - Декораторы классов
   - Декораторы методов
   - Декораторы свойств
   - Декораторы параметров
   - Метаданные

8. **Модули** (`src/08-modules/`)
   - Импорт и экспорт
   - Пространства имен
   - Динамический импорт
   - Организация кода

9. **Манипуляции с типами** (`src/09-type-manipulation/`)
   - Utility Types
   - Mapped Types
   - Conditional Types
   - Template Literal Types
   - Type Inference

## Как использовать проект

1. Клонируйте репозиторий
2. Установите зависимости: `npm install`
3. Изучайте материалы в порядке нумерации папок
4. В каждой папке:
   - Изучите примеры в `examples.ts`
   - Выполните задания в `tasks.ts`
   - Сверьтесь с решениями в `solutions.ts`

## Команды

- `npm start` - Компилирует и запускает проект
- `npm run build` - Компилирует TypeScript в JavaScript
- `npm run dev` - Запускает компиляцию в режиме отслеживания изменений
- `npm run lint` - Проверяет код с помощью ESLint
- `npm run lint:fix` - Исправляет ошибки линтера автоматически

## Требования

- Node.js >= 14.0.0
- npm >= 6.0.0
- TypeScript >= 4.0.0

## Дополнительные ресурсы

- [Официальная документация TypeScript](https://www.typescriptlang.org/docs/)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
- [TypeScript Playground](https://www.typescriptlang.org/play) 