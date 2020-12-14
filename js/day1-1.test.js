const {
    matchSum,
    getProductSum
} = require("./day1-1.js");

describe("day1-1", () => {

    test("Get numbers that sum up", () => {
        const sumTotal = 20;
        const input = [1, 2, 17, 19];

        const [result1, result2] = matchSum(input, sumTotal);
        expect(result1+result2).toBe(sumTotal);
        expect(result1).toBe(1);
        expect(result2).toBe(19);
    });

    test("Get product of sum up", () => {
        const sumTotal = 20;
        const input = [1, 2, 17, 19];

        const result = getProductSum(input, sumTotal);
        expect(result).toBe(19);
    });
});
