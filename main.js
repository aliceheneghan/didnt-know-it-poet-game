class poemTemplate {
  constructor(number, title, line1, line2, line3, line4, line5) {
    this.number = number;
    this.title = title;
    this.poem = [line1, line2, line3, line4, line5];
  }
}

const poem1 = new poemTemplate(1, "New Snack", "This morning I tried a new snack", "I found it at the bottom of ...", "It was ... and yummy", "It felt ... in my tummy", "And now the new snack ...");

console.log(poem1)
