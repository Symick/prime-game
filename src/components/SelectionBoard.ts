import { LitElement, PropertyValueMap, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { SieveOfEratosthenes } from "../utils/sieveOfEratosthenes";
import { GameNumber } from "../model/gameNumber";

/**
 * Main game component
 * 
 * In here the board with all numbers is generated which can be selected by the user
 */
@customElement("selection-board")
export class SelectionBoard extends LitElement {
	@property({ type: Number })
	range: number = 0;
	createRenderRoot() {
		return this;
	}

	constructor() {
		super();
	}

	numberList: Array<GameNumber> = [];

	protected willUpdate(
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
		"selection-board": SelectionBoard;
	}
}
