const { Pokemon, charmander, theOriginals } = require("../pokemon");

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
        strength: ["grass"],
        type: "fire",
        weakness: ["water"],
      });
    });
  });
  describe("Pokemon methods", () => {
    it("Checks that the talk method returns the pokemons sound", () => {
      expect(charmander.talk()).toEqual("char char");
    });
  });
  describe("Strengths and weaknesses", () => {
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
    describe("Teams", () => {
        it("Checks that the passed team in the right format", () => {
            const expected =
             [  {
        name: 'charmander',
        hp: 100,
        attack: 20,
        sound: 'char char',
        move: 'flamethrower',
        type: 'fire',
        weakness: [ 'water' ],
        strength: [ 'grass' ] },
       {
        name: 'bulbasaur',
        hp: 100,
        attack: 20,
        sound: 'bulba',
        move: 'vine whip',
        type: 'grass',
        weakness: [ 'fire' ],
        strength: [ 'water' ] },
       {
        name: 'squirtle',
        hp: 100,
        attack: 20,
        sound: 'squi squi',
        move: 'water gun',
        type: 'water',
        weakness: [ "grass"],
        strength: ['fire'] } ]
            expect(theOriginals).toEqual(expected)
      })
  })
});
 
