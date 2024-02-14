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
		const numberList: Array<GameNumber> = Array.from(
			{ length: range + 1 },
			(_, i) => new GameNumber(i, true, false) // make the list 0 based, i.e number 1 starts on index 0. 0 should not be displayed in the list
		);

		numberList[0].isPrime = false; //1 is not a prime number
		for (let p = 2; p * p <= range; p++) {
			if (numberList[p - 1].isPrime) {
				for (let i = p * p; i <= range; i += p) numberList[i - 1].isPrime = false;
			}
		}

		return numberList;
	}
}
