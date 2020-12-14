const {
    matchThreeSum,
    getProductSum
} = require("./day1-2.js");

describe("day1-2", () => {
    test("Get numbers that sum up", () => {
        const sumTotal = 20;
        const input = [1, 2, 17, 19];

        const [result1, result2, result3] = matchThreeSum(input, sumTotal);
        expect(result1+result2+result3).toBe(sumTotal);
        expect(result1).toBe(1);
        expect(result2).toBe(2);
        expect(result3).toBe(17);
    });

    test("Get product of sum up", () => {
        const sumTotal = 20;
        const input = [1, 2, 17, 19];

        const result = getProductSum(input, sumTotal);
        expect(result).toBe(34);
    });
});
