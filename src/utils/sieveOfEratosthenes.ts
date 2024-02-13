import { GameNumber } from "../model/gameNumber";

export class SieveOfEratosthenes {
	static createList(range: number): Array<GameNumber> {
		const prime = Array.from({ length: range + 1 }, (_, i) => true);

		for (let p = 2; p * p <= range; p++) {
			// If prime[p] is not changed, then it is a
			// prime
			if (prime[p] == true) {
				// Update all multiples of p
				for (let i = p * p; i <= range; i += p) prime[i] = false;
			}
		}

		const numberList: Array<GameNumber> = new Array(range);
		numberList.push(new GameNumber(1, false, false));
		for (let i = 2; i <= range; i++) {
			const num = new GameNumber(i, prime[i], false);
			numberList.push(num);
		}

		return numberList;
	}
}
