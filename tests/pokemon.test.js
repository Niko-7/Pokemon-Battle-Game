const { Pokemon, charmander } = require("../pokemon");

describe("Pokemon", () => {
  describe("Pokemon instances", () => {
    it("Checks that our instance is an object", () => {
      const myPokemon = new Pokemon();
      expect(typeof myPokemon).toBe("object");
    });
    it("Checks that our object contains specific keys", () => {
      const myPokemon = new Pokemon();
      expect(myPokemon).toHaveProperty(
        "name",
        "hp",
        "attack",
        "sound",
        "move",
        "type"
      );
    });
    it("Checks that type defaults to normal", () => {
      const myPokemon = new Pokemon();
      expect(myPokemon.type).toEqual("normal");
    });
    it("Checks that our created pokemon has the correct properties", () => {
      expect(charmander).toEqual({
        attack: 20,
        hp: 100,
        move: "flamethrower",
        name: "charmander",
        sound: "char char",
        strength: [],
        type: "fire",
        weakness: [],
      });
    });
  });
  describe("Pokemon methods", () => {
    it("Checks that the talk method returns the pokemons sound", () => {
      expect(charmander.talk()).toEqual("char char");
    });
  });
  describe("strengths and weaknesses", () => {
    it("sets the appropriate strength to the pokemon depending on its element", () => {
      const testCharmander = new Pokemon(
        "Charmander",
        100,
        20,
        "char char",
        "flamethrower",
        "fire"
      );
      testCharmander.addStrength();
      expect(testCharmander.strength).toEqual(["grass"]);
    });
    it("sets the appropriate weakness to the pokemon depending on its element", () => {
      const testCharmander = new Pokemon(
        "Charmander",
        100,
        20,
        "char char",
        "flamethrower",
        "fire"
      );
      testCharmander.addWeakness();
      expect(testCharmander.weakness).toEqual(["water"]);
    });
  });
  });
 
