const { Pokemon, charmander } = require("../pokemon");

describe("Pokemon", () => {
  test("Check that our instance is an object", () => {
    const myPokemon = new Pokemon();
    expect(typeof myPokemon).toBe("object");
  });
  test("Check that our object contains specific keys", () => {
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
  test("Check that type defaults to normal", () => {
    const myPokemon = new Pokemon();
    expect(myPokemon.type).toEqual("normal");
  });
  test("Check that type defaults to normal", () => {
    expect(charmander).toEqual({
      attack: 20,
      hp: 100,
      move: "flamethrower",
      name: "Charmander",
      sound: "char char",
      strength: [],
      type: "fire",
      weakness: [],
    });
  });
});
