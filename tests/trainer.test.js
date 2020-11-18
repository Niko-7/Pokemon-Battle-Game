
const Trainer = require("../trainer");

describe("Trainer", () => {
    it("Checks that our instance is an object", () => {
      expect(typeof new Trainer()).toBe("object");
    });
    it("Checks that the trainers storage is an empty array", () => {
        const ash = new Trainer("Ash");
        expect(ash.storage).toEqual([]);
    });
});
