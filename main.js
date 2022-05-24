const prompt = require("prompt-sync")({ sigint: true });

// class to add new poems with ease
class PoemTemplate {
  constructor(number, title, line1, line2, line3, line4, line5) {
    this.number = number;
    this.title = title;
    this.poem = [line1, line2, line3, line4, line5];
  }
}

// stock of poems
const poem1 = new PoemTemplate(
  1,
  "New Snack",
  "This morning I tried a new snack",
  "I found it at the bottom of ...",
  "It was ... and yummy",
  "It felt ... in my tummy",
  "And now the new snack ..."
);
const poem2 = new PoemTemplate(
  2,
  "Cocktail Hour",
  "Have you ever seen two ladies in the park",
  "Sipping on ... before it gets dark",
  "... are they planning to ... next",
  "Is this life that they're living ..."
);
const poem3 = new PoemTemplate(
  3,
  "Movement",
  "Run, run, run",
  "Run back...",
  "Or else the things that you ...",
  "Will only keep ..."
);

let thePoetThatDidNotKnowIt = {
  poems: [],
  play() {
    console.log(
      "Welcome to The Poet That Did Not Know It!\n-----------------------------------------"
    ); // welcome message and game title
    const username = prompt("Please choose your username: "); // input will be used to address user throughout the game
    console.clear(); // Cleans the console in order to start the game
    let selector = Math.ceil(Math.random() * 3); // Generates random number in order to select random poem for each game
    const randomPoem = {}; // empty object to store random poem for each game
    for (const poem of this.poems) {
      // for...of loop and if statement searches poems array for matching number
      if (poem.number === selector) {
        Object.assign(randomPoem, poem); // copies poem with matching number to randomPoem object
        console.log(`Hi ${username}, your poem is: '${randomPoem.title}'`); // announces selected poem to user
      }
    }
    const startGame = prompt("Are you ready? Y/N: "); // leads to options for user to start, restart or quit
    switch (startGame.toLowerCase()) {
      case "y":
        console.clear();
        console.log("Great, let's go!");
        break;
      case "n":
        const restartOrQuit = prompt("Type 'R' to restart or 'Q' to quit: ");
        if (restartOrQuit.toLowerCase() === "q") {
          console.clear();
        } else {
          console.clear();
          this.play(); // restarts function
        }
        break;
      default: // gives user another chance to start again in case of typos
        console.clear();
        const tryAgain = prompt(
          `Apologies ${username} but your response has not been recognised, do you want to try again? Y/N: `
        );
        switch (tryAgain.toLowerCase) {
          case "y":
            console.clear();
            this.play(); // restarts function
            break;
          default:
            console.clear();
            console.log("Game over :(");
        }
    }

    // }
    // if (startGame === "Y" || startGame === "y") {
    //   console.clear();
    //   console.log("Great, let's go!");
    // } else if (startGame === "N") {
    //   const restartOrQuit = prompt("Type 'R' to restart or 'Q' to quit: ");
    //   if (restartOrQuit === "Q" || restartOrQuit === "q") {
    //     console.clear();
    //   } else {
    //     console.clear();
    //     this.play(); // restarts function
    //   }
    // } else if {
    //   console.clear();
    //   const tryAgain = prompt(
    //     `Apologies ${username} but your response has not been recognised, do you want to try again? Y/N: `
    //   );
    //   if (tryAgain === "Y" || tryAgain = "y") {
    //     console.clear();
    //   this.play(); // restarts function
    //   }

    // }
  },
};

thePoetThatDidNotKnowIt.poems.push(poem1, poem2, poem3);
console.log(thePoetThatDidNotKnowIt.play());

//

// let gameIntro = prompt("What is your name?");
// console.log(gameIntro);
