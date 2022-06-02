const { clear } = require("console");

const prompt = require("prompt-sync")({ sigint: true });

// class to add new poems with ease
class PoemTemplate {
  constructor(
    number,
    title,
    line1,
    line2,
    line3,
    line4,
    line5,
    line6,
    line7,
    line8,
    line9,
    line10
  ) {
    this.number = number;
    this.title = title;
    this.stanza = [
      line1,
      line2,
      line3,
      line4,
      line5,
      line6,
      line7,
      line8,
      line9,
      line10,
    ];
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
  "Will only ..."
);
const poem4 = new PoemTemplate(
  4,
  "Surprise Poem",
  "There once was a man and a lady",
  "Whose class rep missed their birthdays",
  "So she would like to say sorry",
  "And ask the whole class can we...",
  "Please give our lovely Baha and Aika a round of applause?",
  "But do not fear Mr. Arena",
  "Our dungeons and dragons macchina",
  "I know your birthday is tomorrow",
  "So class...",
  "Can I get a 'he's a jolly good fellow'!?"
);

let thePoetThatDidNotKnowIt = {
  instructions: `Each line of the poem will be displayed one at a time

  If the line contains '...' you can type your own input and hit Enter

    If there is no '...' just hit Enter

      Once your poem is complete it will be displayed

        Hit CTRL+c at any time to exit
  
  `,
  poems: [],
  username: "",
  welcome() {
    console.log(
      "Welcome to The Poet That Did Not Know It!\n-----------------------------------------"
    ); // welcome message and game title
    this.username = prompt("Please choose your username: "); // input will be used to address user throughout the game
    console.clear();
    const viewInstructions = prompt(`Would you like to read the instructions ${this.username} (Y/N)? `).toLowerCase();
    switch (viewInstructions) {
      case "y":
        console.clear();
        this.printInstructions();
        this.start();
        break;
      case "n":
        console.clear();
        this.start();
        break;
      default:
        this.typo();
    }
  },
  printInstructions() {
    console.log(this.instructions);
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
  start() {
    const startGame = prompt(`Are you ready to rhyme ${this.username}? (Y/N): `).toLowerCase(); // leads to options for user to start, restart or quit
    if (startGame === "n") {
      const restartOrQuit = prompt("Type 'R' to restart or 'Q' to quit: ").toLowerCase();
      switch (restartOrQuit) {
        case "q":
          console.clear();
          break;
        case "r":
          console.clear();
          this.welcome(); // restarts function
          break;
        default:
          this.typo();
      }
    } else if (
      !(startGame === "n" || startGame === "y")
    ) {
      this.typo();
    } else {
      console.clear();
      return this.play();
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
      if (typeof line === "string" && line.includes("...")) {
        // if the array element s undefined the includes method won't run
        const input = prompt(`${line} : `); // prints line and accepts user input
        let customised = line.replace("...", input); // copies line and replaces ... with user input
        userPoem.push(customised); // pushes customised line to empty array
      } else if (typeof line === "string") {
        console.log(line); // this is for lines that don't have a ... for user input
        userPoem.push(line);
      }
    });
    console.clear();
    const finalResult = prompt(
      `Your poem is complete! Hit Enter to see your feat :D `
    );
    console.clear();
    console.log(`${randomPoem.title}
    `);
    userPoem.forEach((line) => {
          console.log(line);
      });
      const playAgain = prompt(
        `
        ---------------------------------------------
        
        ${this.username} do you want to play again (Y/N) or discover a surprise (S)? `
      );
      if (playAgain.toLowerCase() === "y") {
        console.clear();
        this.start();
      } else if (playAgain.toLowerCase() === "s") {
        console.clear();
        this.surprise();
      } else {
        return "Goodbye!";
      }
      console.clear();  
  },
  surprise() {
    const surprise = this.poems.find((poem) => poem.number === 4);
    return surprise.stanza.forEach((line) => prompt(`${line}`));
  },
};

thePoetThatDidNotKnowIt.poems.push(poem1, poem2, poem3, poem4);
console.log(thePoetThatDidNotKnowIt.welcome());
