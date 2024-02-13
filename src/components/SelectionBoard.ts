import { LitElement, PropertyValueMap, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { SieveOfEratosthenes } from "../utils/sieveOfEratosthenes";
import { GameNumber } from "../model/gameNumber";
import { ToastElement } from "./ToastElement";

/**
 * Main game component
 *
 * In here the board with all numbers is generated which can be selected by the user
 */
@customElement("selection-board")
export class SelectionBoard extends LitElement {
	createRenderRoot() {
		return this;
	}

	@property({ type: Number })
	private range: number = 0;

	@state()
	private numberList: Array<GameNumber> = [];

	@state()
	private gameFinished = false;

	protected willUpdate(
		_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
	): void {
		if (_changedProperties.has("range")) {
			this.numberList = SieveOfEratosthenes.createList(this.range);
		}
	}

	render() {
		return html`
			<p class="max-w-[80vw] text-center">
				Click on the numbers you think are prime! Hit finish if you think you are done!
			</p>
			<div
				class="grid grid-cols-5 sm:grid-cols-10 max-w-[80vw] max-h-[50vh] sm:max-h-[70vh] overflow-y-scroll gap-4 place-items-center border-1 rounded-t border-solid bg-white p-3 mt-4">
				${this.numberList.map((num) => this.displayNumber(num))}
			</div>
			<div class="flex justify-evenly bg-white rounded-b py-4">
				<button
					class="button ${this.gameFinished ? "hidden" : "block"}"
					@click="${() => {
						this.gameFinished = this.checkWin();
						this.requestUpdate();
					}}">
					Finish
				</button>
				<button class="button" @click="${this.resetGame}">Reset</button>
				<button class="button" @click="">Quit</button>
			</div>
		`;
	}

	private displayNumber(num: GameNumber) {
		return html`
			<label
				class="cursor-pointer border-2 border-solid border-gray-900  p-2 block min-w-10 text-center aspect-square rounded transition-all duration-300 
				${num.selected ? "bg-blue-600 border-blue-900 text-white" : ""}
				${num.selected && !num.correct ? "bg-red-700 border-red-950 text-white" : ""}
				${this.gameFinished && num.selected ? "bg-green-700 border-green-950 text-white" : ""}
					"
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

	private onSelect(num: GameNumber) {
		num.correct = true; //reset correct to not give anything away
		num.selected = !num.selected;
		this.requestUpdate();
	}

	private checkWin(): boolean {
		let isWin = true;
		let incorrectNotSelected: number = 0;
		let incorrectSelected: number = 0;

		for (const gameNumber of this.numberList) {
			if (gameNumber.isPrime !== gameNumber.selected) {
				gameNumber.correct = false;
				isWin = false;
				if (gameNumber.selected) {
					incorrectSelected++;
				} else {
					incorrectNotSelected++;
				}
			}
		}

		if (isWin) {
			ToastElement.show(
				"Good Job!",
				"Congratulations you have guess all the prime numbers!"
			);
		} else {
			ToastElement.show(
				"Oops!",
				`To bad you made some mistakes. ${
					incorrectSelected != 0
						? `${incorrectSelected} numbers were selected incorrectly;`
						: ""
				} ${
					incorrectNotSelected != 0
						? `${incorrectNotSelected} primes were not selected`
						: ""
				} `
			);
		}

		return isWin;
	}

	/**
	 * Reset the game by setting all state of the game and numbers back to default
	 */
	private resetGame() {
		//reset the game state if for example the game is finished and resetted
		this.gameFinished = false;

		//reset numbers to origin
		for (const gameNumber of this.numberList) {
			gameNumber.correct = true;
			gameNumber.selected = false;
		}

		this.requestUpdate();
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"selection-board": SelectionBoard;
	}
}
