const {
    isPolicyValid
} = require("./day2-1.js");

describe("day2-1", () => {

    test("Password are within policy limit", () => {
        const min = 1;
        const max = 2;
        const letterToCheck = "a";
        const password = "asdfghjkl";

        const result = isPolicyValid(min, max, letterToCheck, password);
        expect(result).toBeTruthy();
    });

    test("Password are above limit", () => {
        const min = 1;
        const max = 2;
        const letterToCheck = "a";
        const password = "asdfgahjkla";

        const result = isPolicyValid(min, max, letterToCheck, password);
        expect(result).toBeFalsy();
    });

    test("Password are below limit", () => {
        const min = 1;
        const max = 2;
        const letterToCheck = "a";
        const password = "sdfghjkl";

        const result = isPolicyValid(min, max, letterToCheck, password);
        expect(result).toBeFalsy();
    });
});
