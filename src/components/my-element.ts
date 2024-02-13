import { LitElement, PropertyValueMap, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { SieveOfEratosthenes } from "../utils/sieveOfEratosthenes";
import { GameNumber } from "../model/gameNumber";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("my-element")
export class MyElement extends LitElement {
	createRenderRoot() {
		return this;
	}

	constructor() {
		super();
		this.numberList = SieveOfEratosthenes.createList(30);
	}

	/**
	 * The number of times the button has been clicked.
	 */
	@property()
	range = 0;

	numberList: Array<GameNumber> = [];

	protected updated(
		_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
	): void {
		if (_changedProperties.has("range")) {
			this.numberList = SieveOfEratosthenes.createList(this.range);
		}
	}

	render() {
		return html`
			<div class="grid grid-cols-10">
				${this.numberList.map((num) => this.displayNumber(num))}
			</div>
		`;
	}

	displayNumber(num: GameNumber) {
		return html`
			<div>
				<label
					class="${num.isPrime ? "text-red-700" : "text-gray-900"}"
					for="checkbox${num.number}"
					>${num.number}</label
				>
				<input type="checkbox" id="checkbox${num.number}" />
			</div>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"my-element": MyElement;
	}
}
