const { theOriginals } = require("../pokemon");
const Trainer = require("../trainer");

describe("Trainer", () => {
  describe("Trainer instance", () => {
    it("Checks that our instance is an object", () => {
      expect(typeof new Trainer()).toBe("object");
    });
    it("Checks that the trainers storage is an empty array", () => {
      const ash = new Trainer("Ash");
      expect(ash.storage).toEqual([]);
    });
  });
  describe("Trainer Methods", () => {
    describe("Catch Method", () => {
      it("checks that the method adds a pokemon to the storage array", () => {
        const ash = new Trainer("Ash");
        ash.catch(theOriginals[0]);
        expect(ash.storage[0]).toEqual({
          name: "charmander",
          hp: 100,
          attack: 20,
          sound: "char char",
          move: "flamethrower",
          type: "fire",
          weakness: ["water"],
          strength: ["grass"],
        });
      });
    });
  });
});

