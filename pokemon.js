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
};


const charmander = new Pokemon("charmander", 100, 20 , "char char", "flamethrower", "fire");


module.exports = { Pokemon , charmander}