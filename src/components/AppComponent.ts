import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import "./SelectionBoard";
import "./StartingScreen";
@customElement("app-component")
export class AppComponent extends LitElement {
	protected createRenderRoot(): HTMLElement | DocumentFragment {
		return this;
	}

	@state()
	range: number = 30;

	@state()
	isRunning: boolean = true;

	render() {
		return html` <h1 class="text-center my-4 font-bold text-3xl md:text-5xl">
				The prime number game
			</h1>
			<main class="flex items-center justify-center flex-col">
				${this.loadScreen()}
			</main>`;
	}

	loadScreen() {
		return this.isRunning
			? html`<selection-board range="${this.range}"> </selection-board>`
			: html`<starting-screen @start="${this._startGame}"></starting-screen>`;
	}

	private _startGame(e: CustomEvent) {
		this.isRunning = true;
		this.range = e.detail.range;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"app-component": AppComponent;
	}
}
