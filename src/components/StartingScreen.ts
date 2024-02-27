import { LitElement, html } from "lit";
import { customElement, query, state } from "lit/decorators.js";

/**
 * First screen the user sees when starting the app.
 *
 * some explanation and option to give the range
 *
 * @author Julian Kruithof
 */
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
				<form class="mt-5 flex-col sm:flex-row gap-4 flex justify-around">
					<div>
						<label class="font-semibold mr-4">Range of numbers:</label>
						<input
							type="number"
							class="rounded w-full  sm:max-w-[10ch] border-black border-solid border-2 focus:outline-blue-600 py-1 px-4
							required ${this.givenRange <= 0 || this.givenRange > 50000 ? "border-red-600" : ""}"
							@blur="${() => (this.givenRange = this._input.valueAsNumber)}" />
						<p class="text-red-600">
							${this.givenRange <= 0 || this.givenRange > 50000
								? html`Range must be between 1 and 50000 `
								: ""}
						</p>
					</div>
					<div class="flex flex-col lg:flex-row gap-4">
						<button class="button sm:w-[20vw]" @click="${this._startGame}">
							Start
						</button>
						<button class="button" @click="${this._startRandomGame}">
							Start with random range
						</button>
					</div>
				</form>
			</div>
		`;
	}

	/**
	 * dispatch an event to start the game via the main application
	 * @param event the original event used to fire the start game method
	 * @returns if range is not a number the function returns prematurely
	 */
	private _startGame(event: Event) {
		event.preventDefault();

		const range = this._input.valueAsNumber as number;

		if (range <= 0 || range > 50000) {
			this.givenRange = 0;
			return;
		}

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

	private _startRandomGame(event: Event) {
		event.preventDefault();

		const range = Math.floor(Math.random() * (1000 - 20 + 1) + 20);

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
