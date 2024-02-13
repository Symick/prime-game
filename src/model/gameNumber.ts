/**
 * Class representing a number used by the game
 *
 * @author Julian Kruithof
 */
export class GameNumber {
	private _number: number;
	private _isPrime: boolean;
	private _selected: boolean;
	private _correct = true; //default is true, because only false has consequences on the ui

	/**
	 * construct a game number
	 * @param number the integer representation of the game number i.e. 1 2 3 4 etc.
	 * @param isPrime boolean value to determine if game number is prime
	 * @param selected boolean value to determine if the game number is selected
	 */
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

	public get correct(): boolean {
		return this._correct;
	}

	public set correct(correct: boolean) {
		this._correct = correct;
	}
}
