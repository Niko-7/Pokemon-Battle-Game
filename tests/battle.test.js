const Battle = require("../battle");
const { theOriginals, genTwo } = require("../pokemon");
const Trainer = require("../trainer");

beforeEach(() => {
  ash = new Trainer("Ash");
  ash.catch(theOriginals[0]); 
  ash.catch(theOriginals[1]); 
  ash.catch(theOriginals[2]); 
  theOriginals[0].hp = 100;
  brock = new Trainer("Brock");
  brock.catch(genTwo[0]);
  brock.catch(genTwo[1]); 
  brock.catch(genTwo[2]); 
  testBattle = new Battle(ash, brock, ash.storage, brock.storage);
});

describe("Battle", () => {
  it("returns an object", () => {
    expect(typeof new Battle()).toBe("object");
  });
  it("returns an object containing the correct properties", () => {
    expect(testBattle.enemy.name).toEqual("Brock");
    expect(testBattle.enemy.storage[0].name).toEqual("chikorita");
    expect(testBattle.player.name).toEqual("Ash");
    expect(testBattle.player.storage[0].name).toEqual("charmander");
    expect(testBattle.turn).toEqual(1);
    expect(testBattle.winner).toEqual(false);
  });
});

describe("fight()", () => {
  it("deducts the correct amount of damage", () => {
    const myPokemon = {
      name: "charmander",
      hp: 100,
      attack: 20,
      sound: "char char",
      move: "flamethrower",
      type: "fire",
      weakness: ["water"],
      strength: ["grass"],
    };

    enemyPokemon = {
      name: "chikorita",
      hp: 100,
      attack: 15,
      sound: "chiko!",
      move: "leaf slap",
      type: "grass",
      weakness: ["fire"],
      strength: ["water"],
    };

    enemyPokemon.hp -= myPokemon.attack * 1.25;
    expect(enemyPokemon.hp).toBe(75);
  });
});
