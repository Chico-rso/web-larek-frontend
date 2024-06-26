export interface IProduct {
	id: string;
	title: string;
	price: number | null;
	image: string;
	description: string;
	category: string;
	index?: number
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
export interface  ISuccessForm {
	total: number;
}

export interface IOrderResult {
	id: string;
	total: number;
}

export type IFormErrors = Partial<IOrder>;
export type IOrder = IContactForm & IOrderForm;
