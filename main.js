const prompt = require('prompt-sync')({sigint: true});

class PoemTemplate {
  constructor(number, title, line1, line2, line3, line4, line5) {
    this.number = number;
    this.title = title;
    this.poem = [line1, line2, line3, line4, line5];
  }
}

const poem1 = new PoemTemplate(1, "New Snack", "This morning I tried a new snack", "I found it at the bottom of ...", "It was ... and yummy", "It felt ... in my tummy", "And now the new snack ...");
const poem2 = new PoemTemplate(2, "Cocktail Hour", "Have you ever seen two ladies in the park", "Sipping on ... before it gets dark", "... are they planning to ... next", "Is this life that they're living ...");
const poem3 = new PoemTemplate(3, "Movement", "Run, run, run", "Run back...", "Or else the things that you ...", "Will only keep ...");

let thePoetThatDidNotKnowIt = {
    poems: [],
    play() {
        const randomPoem = [];
        let selector = Math.ceil(Math.random() * 3);
        for (const poem of this.poems) {
            if(poem.number === selector) {
                randomPoem.push(poem)
                console.log(randomPoem)
            }
        }
    }
}

thePoetThatDidNotKnowIt.poems.push(poem1, poem2, poem3);
console.log(thePoetThatDidNotKnowIt.play())

// Welcome to The Poet That Didn't Know It!

// let gameIntro = prompt("What is your name?");
// console.log(gameIntro);

