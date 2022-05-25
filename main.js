const { clear } = require("console");

const prompt = require("prompt-sync")({ sigint: true });

// class to add new poems with ease
class PoemTemplate {
  constructor(number, title, line1, line2, line3, line4, line5) {
    this.number = number;
    this.title = title;
    this.stanza = [line1, line2, line3, line4, line5];
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
  "Have you ever seen two ... in the park",
  "Sipping on ... before it gets dark",
  "When aperatif o'clock chimes",
  "It's time to leave ... behind!"
);
const poem3 = new PoemTemplate(
  3,
  "Movement",
  "Run, run, run",
  "Run all the way ...",
  "Or else the things that you ...",
  "Will only keep ..."
);

let thePoetThatDidNotKnowIt = {
  poems: [],
  username: "",
  start() {
    console.log(
      "Welcome to The Poet That Did Not Know It!\n-----------------------------------------"
    ); // welcome message and game title
    this.username = prompt("Please choose your username: "); // input will be used to address user throughout the game
    console.clear(); // Cleans the console in order to start the game
    const startGame = prompt(`Are you ready to rhyme ${this.username}? Y/N: `); // leads to options for user to start, restart or quit
    if (startGame.toLowerCase() === "n") {
      const restartOrQuit = prompt("Type 'R' to restart or 'Q' to quit: ");
      switch (restartOrQuit.toLowerCase()) {
        case "q":
          console.clear();
          break;
        case "r":
          console.clear();
          this.start(); // restarts function
          break;
        default:
          this.typo();
      }
    } else if (
      !(startGame.toLowerCase() === "n" || startGame.toLowerCase() === "y")
    ) {
      this.typo();
    } else {
      console.clear();
      return this.play();
    }
  },
  typo() {
    // method to be called on in case of user typo so they can try again
    console.clear();
    const tryAgain = prompt(
      `Apologies ${this.username} but your response has not been recognised, type 'Y' if you want to try again: `
    );
    if (tryAgain.toLowerCase() === "y") {
      console.clear();
      this.start(); // restarts game
    } else {
      console.clear();
      console.log("Game over :(");
    }
  },
  play() {
    let selector = Math.ceil(Math.random() * 3); // Generates random number in order to select random poem for each game
    const randomPoem = this.poems.find((poem) => poem.number === selector); // finds and stores random poem for each game
    console.log(
      `Great, let's go!\n----------------\nYour poem is called '${randomPoem.title}'\n`
    );
    const userPoem = []; // empty array to push user's customised poem to
    randomPoem.stanza.forEach((line) => {
      if (typeof line === "string" && line.includes("...")) { // if the array element s undefined the includes method won't run
        const input = prompt(`${line} : `); // prints line and accepts user input
        let customised = line.replace("...", input); // copies line and replaces ... with user input
        userPoem.push(customised); // pushes customised line to empty array
      } else {
        console.log(line); // this is for lines that don't have a ... for user input
        userPoem.push(line);
      }
    });
    console.clear();
    const finalResult = prompt(
      `Your poem is complete! Type 'Yaas' if you want to see your feat :D `
    );
    if (finalResult.toLowerCase() === "yaas") {
        this.display();
    }
  },
};

thePoetThatDidNotKnowIt.poems.push(poem1, poem2, poem3);
console.log(thePoetThatDidNotKnowIt.start());

