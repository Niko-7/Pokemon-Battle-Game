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
        this.strength.push("fire", "ground");
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
        this.weakness.push("electric");
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

module.exports = { Pokemon, charmander };
