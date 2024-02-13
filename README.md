# Prime Number Game

Welcome to the Prime Number Game! This is a simple game where users can select numbers within a specified range and the system checks whether the selected numbers are prime using the Sieve of Eratosthenes algorithm.

## How to Play

1. **Selecting a range**: 
   - Specify the range of numbers you want to play with. The range should be between 1 and the maximum value supported by the system.
2. **Starting the game**:
   - Press the start button. Now the game is loaded and you can start playing.
3. **Finishing the game**:
   - Once you have selected all the numbers you want, click on the "Finish" button to check your selections.
4. **Checking for Correctness**:
   - After clicking the "Finish" button, the system will check whether all selected numbers are correct.
   - You will receive a toast message indicating whether you won or if there are incorrect selections (e.g., prime numbers not selected, non-prime numbers selected).



## About the Sieve of Eratosthenes Algorithm

The Sieve of Eratosthenes is an efficient algorithm for finding all prime numbers up to a specified integer. It works by iteratively marking the multiples of each prime number starting from 2, thereby eliminating composite numbers and leaving only the primes.

## Technologies Used

- TypeScript: The game logic is implemented in JavaScript or TypeScript.
- Lit: Lit is a simple and fast library for building web components. It is used to create modular and reusable components for the game.
- Tailwind CSS: Tailwind CSS is a utility-first CSS framework for quickly building custom designs. It is used for styling the user interface of the game.
- Vite: The project may be set up using Vite for fast development and building.
- GitHub Pages: The game may be deployed and hosted on GitHub Pages for easy access.

## Getting Started

To play the Prime Number Game locally or deploy it to your own server, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/prime-number-game.git`
2. Navigate to the project directory: `cd prime-number-game`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Open your browser and go to `http://localhost:3000/prime-game` to play the game.

## Contributing

Contributions are welcome! If you'd like to contribute to the Prime Number Game, feel free to fork the repository, make your changes, and submit a pull request.



Feel free to customize this README to fit your specific game implementation and preferences. Enjoy playing and learning about prime numbers with the Prime Number Game!

