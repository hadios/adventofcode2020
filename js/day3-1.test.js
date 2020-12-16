const {
    getTreeCountAlongRoute
} = require("./day3-1.js");

describe("day2-1", () => {

    test("Count tree in empty land", () => {
        const input = [
            "..........",
            "..........",
            ".........."
        ];

        const xMove = 3;
        const yMove = 1;
        let x = 0;
        let y = 0;

        const result = getTreeCountAlongRoute(input, x, y, xMove, yMove);
        expect(result).toBe(0);
    });

    test.only("Count tree in single tree land in slope", () => {
        const input = [
            "..........",
            "...#......",
            ".........."
        ];

        const xMove = 3;
        const yMove = 1;
        let x = 0;
        let y = 0;

        const result = getTreeCountAlongRoute(input, x, y, xMove, yMove);
        expect(result).toBe(1);
    });

    test("Count tree in single tree land not within slope", () => {
        const input = [
            "...#......",
            "..........",
            ".........."
        ];

        const xMove = 3;
        const yMove = 1;
        let x = 0;
        let y = 0;

        const result = getTreeCountAlongRoute(input, x, y, xMove, yMove);
        expect(result).toBe(0);
    });

    test("Count tree in single tree land outside route", () => {
        const input = [
            "..........",
            "..........",
            "...#......"
        ];

        const xMove = 3;
        const yMove = 1;
        let x = 0;
        let y = 0;

        const result = getTreeCountAlongRoute(input, x, y, xMove, yMove);
        expect(result).toBe(0);
    });

    test("Count tree in fully forested land", () => {
        const input = [
            "##########",
            "##########",
            "##########",
        ];

        const xMove = 3;
        const yMove = 1;
        let x = 0;
        let y = 0;

        const result = getTreeCountAlongRoute(input, x, y, xMove, yMove);
        expect(result).toBe(1);
    });
});
