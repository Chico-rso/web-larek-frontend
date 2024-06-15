import { Form } from '../common/Form';
import { IOrderForm } from '../../types';
import { IEvents } from '../base/events';
import { ensureAllElements } from '../../utils/utils';


export class OrderForm extends Form<IOrderForm> {
	protected _paymentButtons : HTMLButtonElement[];
	protected _address: HTMLInputElement;

	constructor(container: HTMLFormElement, event: IEvents) {
		super(container ,event);
		this._paymentButtons = ensureAllElements(".button_alt", this.container);
		this._address = this.container.elements.namedItem("address") as HTMLInputElement;

		this._paymentButtons.forEach((button) => {
			button.addEventListener('click', () => {
				this.paymentButton = button.name;
				this.onInputChange(`payment`, button.name);
			});
		});
	}


	set address (value: string) {
		this._address.value = value;
	}

	set paymentButton (name: string) {
		this._paymentButtons.forEach(button => {
			this.toggleClass(button, 'button_alt-active', button.name === name)
		})
	}


	clearForm() {
		this._paymentButtons.forEach((button) => {
			this.toggleClass(button, 'button_alt-active', false);
		});

		super.clearForm();
	}
}
