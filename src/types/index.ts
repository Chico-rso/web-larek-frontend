export interface IMainPage {
	counter: number;
	catalog: HTMLElement[];
}

export interface IProduct {
	id: string;
	name: string;
	price: number | null;
	image: string;
	description: string;
	category: string;
}

// тип состояния приложения
export interface IAppState {
	catalog: IProduct[];
	basket: IProduct[];
	preview: string | null;
	order: IOrder | null;
	loading: boolean;
	setCatalog: (catalog: IProduct[]) => void;
	getResultBasket: () => IBasket;
}

export interface IModal {
	title: string;
	content: HTMLElement[];
}

export interface IBasket {
	items: IProduct[];
	total: number;
}

export interface IOrder {
	payment: string;
	address: string;
}

export interface IFormValidation {
	valid: boolean;
	errors: string[];
}

export interface IDeliveryForm {
	payment: string;
	address: string;
}

export interface IContactForm {
	email: string;
	phone: string;
}

export interface ISuccessForm {
	description: number;
}

export interface ISuccessfulOrder {
	id: string;
	total: number;
}
