import { GameNumber } from "../model/gameNumber";

/**
 * Class to handle the logic of the sieve of eratosthenes algorithm used to determine if a number is prime
 *
 * @author Julian Kruithof
 */
export class SieveOfEratosthenes {
	/**
	 * Create a list form 1 to range where all prime numbers are marked as prime
	 * @param range the range of numbers to generate a list for
	 * @returns a list of game numbers holding information about a certain number
	 */
	static createList(range: number): Array<GameNumber> {
		const prime = Array.from({ length: range + 1 }, (_) => true);

		for (let p = 2; p * p <= range; p++) {
			// If prime[p] is not changed, then it is a
			// prime
			if (prime[p] == true) {
				// Update all multiples of p
				for (let i = p * p; i <= range; i += p) prime[i] = false;
			}
		}

		const numberList: Array<GameNumber> = new Array(range);
		numberList[0] = new GameNumber(1, false, false);
		for (let i = 2; i <= range; i++) {
			const num = new GameNumber(i, prime[i], false);
			numberList[i - 1] = num;
		}

		return numberList;
	}
}
