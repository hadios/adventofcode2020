const {
    isPolicyValid
} = require("./day2-2.js");

describe("day2-1", () => {
    test("Letter is found first position in password", () => {
        const min = 1;
        const max = 2;
        const letterToCheck = "a";
        const password = "asdfghjkl";

        const result = isPolicyValid(min, max, letterToCheck, password);
        expect(result).toBeTruthy();
    });

    test("Letter is found second position in password", () => {
        const min = 1;
        const max = 2;
        const letterToCheck = "a";
        const password = "sadfgahjkla";

        const result = isPolicyValid(min, max, letterToCheck, password);
        expect(result).toBeTruthy();
    });

    test("Letter is found in both position in password", () => {
        const min = 1;
        const max = 2;
        const letterToCheck = "a";
        const password = "aadfgahjkla";

        const result = isPolicyValid(min, max, letterToCheck, password);
        expect(result).toBeFalsy();
    });

    test("Letter is NOT found in any position in password", () => {
        const min = 1;
        const max = 2;
        const letterToCheck = "a";
        const password = "qwdfgahjkla";

        const result = isPolicyValid(min, max, letterToCheck, password);
        expect(result).toBeFalsy();
    });
});
