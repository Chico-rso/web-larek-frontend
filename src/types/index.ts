// Тип для товара
export interface Product {
	id: string;
	name: string;
	price: number;
	image: string;
	description: string;
	category: string;
}

// Тип для элемента корзины
export interface CartItem {
	product: Product;
	quantity: number;
}

// Тип для корзины
export interface Cart {
	items: CartItem[];
}

// Тип для инрмации о заказе
export interface OrderInfo {
	paymentMethod: string;
	deliveryAddress: string;
	email: string;
	phone: string;
}
