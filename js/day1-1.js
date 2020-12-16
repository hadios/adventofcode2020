const fs = require("fs");

const INPUT_FILENAME = "input1-1.txt";
const PRODUCT_SUM = 2020;

function matchSum(inputs, sum) {
    const sortedInput = inputs.sort((x, y) => x-y);

    // Brute force
    for (let i = 0; i < sortedInput.length; i++) {
        for (let j = i+1; j < sortedInput.length; j++) {
            if (sortedInput[i] + sortedInput[j] === sum) {
                return [sortedInput[i], sortedInput[j]];
            }
        }
    }

    return null;
}

function getProductSum(input, sum) {
    const sumResult = matchSum(input, sum);
    if (!sumResult) {
        return null;
    }

    const finalResult = sumResult[0] * sumResult[1];
    return finalResult;
}

function run() {
    const textData = fs.readFileSync(INPUT_FILENAME, "utf8");

    if (!textData) {
        console.error("Invalid input");
        return null;
    }

    const input = textData
        .split("\n")
        .map((x) => +x);

    const result = getProductSum(input, PRODUCT_SUM);
    return result;
}

module.exports = {
    run,
    matchSum,
    getProductSum
};