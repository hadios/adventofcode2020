const fs = require("fs");

const INPUT_FILENAME = "input1-1.txt";
const PRODUCT_SUM = 2020;

function matchThreeSum(inputs, sum) {
    const sortedInput = inputs.sort((x, y) => x-y);

    // Brute force
    for (let i = 0; i < sortedInput.length; i++) {
        for (let j = i+1; j < sortedInput.length; j++) {
            for (let k = j+1; k < sortedInput.length; k++) {
                if (sortedInput[i] + sortedInput[j] + sortedInput[k] === sum) {
                    return [sortedInput[i], sortedInput[j], sortedInput[k]];
                }
            }
        }
    }

    return null;
}

function getProductSum(input, sum) {
    const sumResult = matchThreeSum(input, sum);
    if (!sumResult) {
        return null;
    }

    const finalResult = sumResult[0] * sumResult[1] * sumResult[2];
    return finalResult;
}



function run() {
    // Read from input
    const textData = fs.readFileSync(INPUT_FILENAME, "utf8");

    if (!textData) {
        return null;
    }

    const input = textData
        .split("\n")
        .map((x) => +x)
        .sort((x, y) => x-y);
    input.shift();

    const result = getProductSum(input, PRODUCT_SUM);
    return result;
}

module.exports = {
    run,
    matchThreeSum,
    getProductSum
};