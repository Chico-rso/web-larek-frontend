# Проектная работа "Веб-ларек"

Стек: HTML, SCSS, TS, Webpack

Структура проекта:
- src/ — исходные файлы проекта
- src/components/ — папка с JS компонентами
- src/components/base/ — папка с базовым кодом

Важные файлы:
- src/pages/index.html — HTML-файл главной страницы
- src/types/index.ts — файл с типами
- src/index.ts — точка входа приложения
- src/scss/styles.scss — корневой файл стилей
- src/utils/constants.ts — файл с константами
- src/utils/utils.ts — файл с утилитами

## Установка и запуск
Для установки и запуска проекта необходимо выполнить команды

```
npm install
npm run start
```

или

```
yarn
yarn start
```
## Сборка

```
npm run build
```

или

```
yarn build
```

Конечно, я помогу вам дополнить документацию, чтобы она отвечала на все поставленные вопросы и содержала более подробные описания классов, их свойств и методов. Вот улучшенная версия документации:

# Архитектура приложения "Веб-ларек"

## Основные части архитектуры

Проект разработан с применением паттерна проектирования MVP (Model-View-Presenter) и состоит из следующих основных частей:

1. **Model (Модель)**: Отвечает за работу с данными.
   - Класс `AppData`: Хранит и обрабатывает все данные приложения.

2. **View (Представление)**: Отвечает за отображение данных пользователю.
   - Компоненты: `Form`, `Modal`, `Card`, `Basket`, `ContactForm`, `OrderForm`, `Page`, `SuccessForm`.

3. **Presenter**: Связывает Model и View, обрабатывает пользовательский ввод.
   - Реализован в файле `index.ts`.

4. **API**: Отвечает за взаимодействие с сервером.
   - Классы `Api` и `WebLarekApi`.

5. **Event System**: Обеспечивает взаимодействие между компонентами.
   - Класс `EventEmitter`.

## Функции основных частей

1. **Model**: Хранит состояние приложения, обрабатывает и валидирует данные.
2. **View**: Отображает интерфейс пользователя, реагирует на изменения в данных.
3. **Presenter**: Координирует работу Model и View, обрабатывает пользовательские действия.
4. **API**: Отправляет запросы на сервер и обрабатывает ответы.
5. **Event System**: Обеспечивает слабую связанность компонентов, позволяя им обмениваться данными и сигналами.

## Взаимодействие частей

Взаимодействие между частями приложения происходит через систему событий (EventEmitter). Модели инициируют события, а слушатели в Presenter передают данные компонентам отображения.

## Данные приложения

Основные типы данных:

1. `IProduct`: Информация о товаре (id, name, price, image, description, category).
2. `IOrder`: Данные заказа (email, phone, address, payment).
3. `IAppState`: Состояние приложения (catalog, basket, order, formErrors).
4. `IFormErrors`: Ошибки валидации формы.

## Компоненты приложения

1. `Form`: Базовый класс для форм.
2. `Modal`: Отображение модальных окон.
3. `Card`: Отображение карточки товара.
4. `Basket`: Отображение корзины.
5. `ContactForm`: Форма контактных данных.
6. `OrderForm`: Форма оформления заказа.
7. `Page`: Главная страница приложения.
8. `SuccessForm`: Форма успешного оформления заказа.

## Процессы в приложении

Процессы реализованы через систему событий (EventEmitter). Основные события:

- `catalog:changed`: Изменение каталога товаров.
- `basket:changed`: Изменение состояния корзины.
- `order:submit`: Отправка заказа.
- `modal:open`, `modal:close`: Открытие и закрытие модальных окон.

## Подробное описание классов

### Класс `Api`

Базовый класс для работы с API.

Конструктор:
- `baseUrl: string`: URL сервера для отправки запросов.
- `options: RequestInit`: Объект настроек для запросов.

Методы:
- `handleResponse(response: Response): Promise`: Обрабатывает ответ от сервера.
- `get(uri: string)`: Выполняет GET-запрос.
- `post(uri: string, data: object, method: ApiPostMethods = 'POST')`: Выполняет POST-запрос.

### Класс `EventEmitter`

Реализует паттерн "Наблюдатель" для обмена событиями между компонентами.

Методы:
- `on(event: string, callback: Function)`: Подписывает обработчик на событие.
- `off(event: string, callback: Function)`: Отписывает обработчик от события.
- `emit(event: string, data?: any)`: Генерирует событие с опциональными данными.
- `onAll(callback: Function)`: Подписывает обработчик на все события.
- `offAll()`: Отписывает все обработчики.
- `trigger(event: string, context?: object)`: Создает функцию-триггер для генерации события.

### Класс `Component<T>`

Абстрактный базовый класс для компонентов пользовательского интерфейса.

Конструктор:
- `container: HTMLElement`: Контейнер, в который будет встроен компонент.

Методы:
- `render(data?: T): HTMLElement`: Отрисовывает компонент.
- `toggleClass(element: HTMLElement, className: string, force?: boolean)`: Переключает класс элемента.
- `setText(element: HTMLElement, value: unknown)`: Устанавливает текстовое содержимое элемента.
- `setImage(element: HTMLImageElement, src: string, alt?: string)`: Устанавливает изображение.
- `setDisabled(element: HTMLElement, state: boolean)`: Устанавливает состояние disabled для элемента.

### Класс `Model<T>`

Абстрактный базовый класс для моделей данных.

Методы:
- `emitChanges(event: string, payload?: object)`: Генерирует событие об изменении модели.

### Класс `AppData`

Хранит и обрабатывает данные приложения.

Свойства:
- `basket: IProduct[]`: Корзина товаров.
- `catalog: IProduct[]`: Каталог товаров.
- `order: IOrder`: Данные заказа.
- `formErrors: IFormErrors`: Ошибки валидации формы.

Методы:
- `setBasket(items: IProduct[])`: Устанавливает содержимое корзины.
- `getBasket()`: Возвращает содержимое корзины.
- `addItemToBasket(item: IProduct)`: Добавляет товар в корзину.
- `deleteItemFromBasket(id: string)`: Удаляет товар из корзины.
- `setCatalog(items: IProduct[])`: Устанавливает каталог товаров.
- `validateOrderForm()`: Валидирует форму заказа.
- `clearOrder()`: Очищает данные заказа.

### Класс `Form`

Базовый класс для форм.

Свойства:
- `valid: boolean`: Устанавливает/снимает атрибут disabled с кнопки отправки.
- `errors: string`: Устанавливает текст ошибки.

Методы:
- `onInputChange(field: keyof T, value: string)`: Обработчик изменения поля ввода.
- `clearForm()`: Очищает форму.

### Класс `Modal`

Управляет отображением модальных окон.

Свойства:
- `content: HTMLElement`: Устанавливает содержимое модального окна.

Методы:
- `open()`: Открывает модальное окно.
- `close()`: Закрывает модальное окно.
- `render(data: IModal): HTMLElement`: Отрисовывает модальное окно.

### Класс `Card`

Отображает карточку товара.

Свойства:
- `id: string`: ID товара.
- `title: string`: Название товара.
- `image: string`: URL изображения товара.
- `price: number`: Цена товара.
- `description: string`: Описание товара.

Методы:
- `render(data: IProduct): HTMLElement`: Отрисовывает карточку товара.

### Класс `Basket`

Отображает корзину товаров.

Свойства:
- `list: HTMLElement[]`: Список товаров в корзине.
- `total: number`: Общая стоимость товаров в корзине.

### Класс `ContactForm`

Форма для ввода контактных данных.

Свойства:
- `name: string`: Имя клиента.
- `email: string`: Email клиента.

### Класс `OrderForm`

Форма для оформления заказа.

Свойства:
- `address: string`: Адрес доставки.
- `paymentButton: string`: Выбранный способ оплаты.

Методы:
- `clearForm()`: Очищает форму и сбрасывает выбранный способ оплаты.

### Класс `Page`

Отображает главную страницу приложения.

Свойства:
- `counter: number`: Количество товаров в корзине.
- `catalog: HTMLElement[]`: Карточки товаров в каталоге.
- `locked: boolean`: Блокировка прокрутки страницы.

### Класс `SuccessForm`

Отображает форму успешного оформления заказа.

Свойства:
- `total: number`: Общая стоимость заказа.

### Класс `WebLarekApi`

Реализует взаимодействие с API сервера.

Методы:
- `getProduct(id: string): Promise<IProduct>`: Получает информацию о товаре по ID.
- `getProductsCatalog(): Promise<IProduct[]>`: Получает каталог товаров.
- `order(data: IOrder): Promise<IOrderResult>`: Отправляет заказ на сервер.

Эта документация теперь более подробно описывает архитектуру приложения, функции основных частей, взаимодействие между ними, используемые данные, компоненты и процессы. Также добавлены подробные описания классов, их свойств и методов.

## Основные типы данных

```typescript
export type ProductCategory = 'софт-скил' | 'другое' | 'дополнительное' | 'кнопка' | 'хард-скил';

export interface IProduct {
    id: string;
    name: string;
    price: number | null;
    image: string;
    description: string;
    category: ProductCategory;
	index?: number;
}

export interface IAppState {
    catalog: IProduct[];
    basket: IProduct[];
    order: IOrder | null;
    formErrors: IFormErrors;
}

export type IOrderPost = IOrder & {
    total: number;
    items: string[];
}

export interface IContactForm {
    email: string;
    phone: string;
}

export interface IOrderForm {
    payment: string;
    address: string;
}

export interface ISuccessForm {
    total: number;
}

export interface IOrderResult {
    id: string;
    total: number;
}

export type IFormErrors = Partial<IOrder>;
export type IOrder = IContactForm & IOrderForm;
```


