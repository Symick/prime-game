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
			<div
				class="grid grid-cols-5 sm:grid-cols-10  gap-4 place-items-center border-1 rounded border-solid bg-white p-3">
				${this.numberList.map((num) => this.displayNumber(num))}
			</div>
		`;
	}

	displayNumber(num: GameNumber) {
		return html`
			<label
				class="cursor-pointer border-2 border-solid  p-2 block min-w-10 text-center aspect-square rounded ${num.selected
					? "border-black"
					: "border-gray-200"}"
				for="checkbox${num.number}"
				>${num.number}</label
			>
			<input
				class="hidden"
				type="checkbox"
				id="checkbox${num.number}"
				@change="${() => this.onSelect(num)}" />
		`;
	}

	onSelect(num: GameNumber) {
		num.selected = !num.selected;
		this.requestUpdate();
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"selection-board": SelectionBoard;
	}
}
