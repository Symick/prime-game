import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import "./SelectionBoard";
@customElement("app-component")
export class AppComponent extends LitElement {
	protected createRenderRoot(): HTMLElement | DocumentFragment {
		return this;
	}

	render() {
		return html`<main class="flex min-h-screen items-center justify-center bg-slate-100">
			<selection-board range="30"> </selection-board>
		</main>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"app-component": AppComponent;
	}
}
