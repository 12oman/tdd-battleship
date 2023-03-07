const Gameboard = require("./index");

describe("Gameboard", () => {
    test("Gameboard returns an object", () => {
        expect(typeof Gameboard() === "object").toBe(true);
    });
});

