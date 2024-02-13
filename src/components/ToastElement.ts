import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement("toast-element")
export class ToastElement extends LitElement {
	protected createRenderRoot(): HTMLElement | DocumentFragment {
		return this;
	}

	@state()
	private message: string = "";

	@state()
	private toastTitle: string = "";

	render() {
		return html`<div
			class="fixed w-[50vw] sm:w-[25vw] transition-all top-5 right-5 bg-white 
            border-gray-700 border-2 border-solid border-opacity-75 z-[9999]
            rounded">
			<div
				class="border-b-2 font-bold border-gray-700 border-opacity-75 border-solid px-4 py-2">
				<span>${this.toastTitle}</span>
			</div>
			<p class="p-4">${this.message}</p>
		</div>`;
	}

	static show(title: string, message: string, duration: number = 3000) {
		const existing = document.querySelector("toast-element");
		if (existing) {
			document.body.removeChild(existing);
		}
		const toast = document.createElement("toast-element");
		toast.message = message;
		toast.toastTitle = title;

		document.body.appendChild(toast);
		setTimeout(() => {
			toast.remove();
		}, duration);
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"toast-element": ToastElement;
	}
}
