export class GameNumber {
	private _number: number;
	private _isPrime: boolean;
	private _selected: boolean;
	constructor(number: number, isPrime: boolean, selected: boolean) {
		this._number = number;
		this._isPrime = isPrime;
		this._selected = selected;
	}

	public get number(): number {
		return this._number;
	}

	public get isPrime(): boolean {
		return this._isPrime;
	}

	public get selected(): boolean {
		return this._selected;
	}

	public set selected(selected: boolean) {
		this._selected = selected;
	}
}