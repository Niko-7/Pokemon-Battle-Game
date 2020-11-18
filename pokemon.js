class Pokemon {
  constructor(name, hp, attack, sound, move, type = "normal") {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.sound = sound;
    this.move = move;
    this.type = type;
    this.weakness = [];
    this.strength = [];
  }

  talk() {
    return this.sound;
  }

  addStrength() {
    switch (this.type) {
      case "fire":
        this.strength.push("grass");
        break;

      case "water":
        this.strength.push("fire");
        break;

      case "grass":
        this.strength.push("water");
        break;
    }
  }
  addWeakness() {
    switch (this.type) {
      case "fire":
        this.weakness.push("water");
        break;

      case "water":
        this.weakness.push("grass");
        break;

      case "grass":
        this.weakness.push("fire");
        break;
    }
  }
}

const charmander = new Pokemon(
  "charmander",
  100,
  20,
  "char char",
  "flamethrower",
  "fire"
);
const bulbasaur = new Pokemon(
  "bulbasaur",
  100,
  20,
  "bulba",
  "vine whip",
  "grass"
);
const squirtle = new Pokemon(
  "squirtle",
  100,
  20,
  "squi squi",
  "water gun",
  "water"
);
charmander.addStrength();
charmander.addWeakness();
squirtle.addStrength();
squirtle.addWeakness();
bulbasaur.addStrength();
bulbasaur.addWeakness();

const theOriginals = [charmander , bulbasaur, squirtle]

const chikorita = new Pokemon(
  "chikorita",
  100,
  15,
  "chiko",
  "leaf slap",
  "grass"
);
const cyndaquil = new Pokemon(
  "cyndaquil",
  100,
  15,
  "cyndaaa",
  "flame blast",
  "fire"
);
const totodile = new Pokemon(
  "totodile",
  100,
  15,
  "tot tot",
  "water spray",
  "water"
);
chikorita.addStrength();
chikorita.addWeakness();
totodile.addStrength();
totodile.addWeakness();
cyndaquil.addStrength();
cyndaquil.addWeakness();

const genTwo = [chikorita, cyndaquil, totodile];

const charizard = new Pokemon(
  "charizard",
  150,
  5,
  "pew pew",
  "fire pew",
  "fire"
);
const tortoise = new Pokemon(
  "tortoise",
  150,
  5,
  "excuse me but turtles dont speak",
  "wet spoon",
  "water"
);
const venusaur = new Pokemon(
  "venusaur",
  150,
  5,
  "oi mate wanna go for a pint after the fight?",
  "whip da whip",
  "grass"
);
venusaur.addStrength();
venusaur.addWeakness();
tortoise.addStrength();
tortoise.addWeakness();
charizard.addStrength();
charizard.addWeakness();

const tooOp = [venusaur, tortoise, charizard]

const meowth =  new Pokemon(
  "meowth",
  70,
  5,
  "the devs are never fair to us :((((",
  "scratch that scratch",
);
const wobbuffet =  new Pokemon(
  "wobbuffet",
  70,
  5,
  "hhhhhhh",
  "accidental slap",
);

const teamRocket = [meowth, wobbuffet]

const mewtwo = new Pokemon(
  "mewtwo",
  9999,
  20,
  "....",
  "mind blast"
);

const theUnbeatable = [mewtwo]
module.exports = {
  Pokemon,
  charmander,
  theOriginals,
  genTwo,
  tooOp,
  teamRocket,
  theUnbeatable,
};