import { LitElement, html } from "lit";
import { customElement, query, state } from "lit/decorators.js";

@customElement("starting-screen")
export class StartingScreen extends LitElement {
	protected createRenderRoot() {
		return this;
	}

	@query("input", true) _input!: HTMLInputElement;

	@state()
	givenRange: number = Number.NaN;

	render() {
		return html`
			<div class="w-[75vw]">
				<p class="">
					Welcome to the prime number game. The workings of the game are simple. You
					enter the range of numbers you want to get and click start. You'll see a
					list of all numbers from 1 to your given range. Your task is to select all
					the prime numbers. Good luck!
				</p>
				<form class="mt-5 flex justify-around">
					<div>
						<label class="font-semibold">Range of numbers:</label>
						<input
							type="number"
							class="rounded border-black border-solid border-2 focus:outline-blue-600 py-1 px-4
							required ${this.givenRange <= 0 ? "border-red-600" : ""}"
							@blur="${() => (this.givenRange = this._input.valueAsNumber)}" />
						<p class="text-red-600">
							${this.givenRange <= 0 ? html`Range must be greater than 0` : ""}
						</p>
					</div>

					<button class="button w-80" @click="${this._startGame}">Start</button>
				</form>
			</div>
		`;
	}

	private _startGame(event: Event) {
		event.preventDefault();

		const range = Math.abs(this._input.valueAsNumber) as number;

		if (isNaN(range)) {
			this.givenRange = 0;
			return;
		}
		this.givenRange = range;
		const options = {
			detail: { range },
			bubbles: true,
			composed: true,
		};

		this.dispatchEvent(new CustomEvent("start", options));
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"starting-screen": StartingScreen;
	}
}
