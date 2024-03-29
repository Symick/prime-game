import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import "./SelectionBoard";
import "./StartingScreen";

/**
 * Main entry point of the prime game app.
 *
 * @author Julian Kruithof
 */
@customElement("app-component")
export class AppComponent extends LitElement {
	protected createRenderRoot(): HTMLElement | DocumentFragment {
		return this;
	}

	@state()
	range: number = 0; //range of numbers the user needs to find prime numbers in

	@state()
	isRunning: boolean = false; //keep track of game state

	render() {
		return html`
			<header>
				<h1 class="text-center my-6 font-bold  text-2xl sm:text-3xl md:text-5xl">
					The prime number game
				</h1>
			</header>
			<main class="flex items-center justify-center flex-col">${this.loadScreen()}</main>
			<footer class="text-center fixed bottom-0 w-svw bg-blue-700 p-4">
				<p class="text-white text-xs">
					&copy; 2024 Julian Kruithof. All rights reserved.
				</p>
			</footer>
		`;
	}

	/**
	 * determine via the isRunning state which screen to load.
	 * @returns the html template screen to load
	 */
	loadScreen() {
		return this.isRunning
			? html`<selection-board @quit="${this._quitGame}" range="${this.range}">
			  </selection-board>`
			: html`<starting-screen @start="${this._startGame}"></starting-screen>`;
	}

	/**
	 * start the prime game
	 * @param e custom event used to start the game
	 */
	private _startGame(e: CustomEvent) {
		this.isRunning = true;
		this.range = e.detail.range;
	}

	/**
	 * quit the game.
	 */
	private _quitGame() {
		this.isRunning = false;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"app-component": AppComponent;
	}
}
