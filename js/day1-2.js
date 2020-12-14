const fs = require("fs");
const { exit } = require("process");

const INPUT_FILENAME = "input1-1.txt";
const PRODUCT_SUM = 2020;

// Read from input
const textData = fs.readFileSync(INPUT_FILENAME, "utf8");

if (!textData) {
    exit(1);
}

const input = textData
    .split("\n")
    .map((x) => +x)
    .sort((x, y) => x-y);
input.shift();

function matchThreeSum(inputs, sum) {
    const sortedInput = inputs.sort((x, y) => x-y);
    console.log(sortedInput);

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

    console.log(sumResult);
    const finalResult = sumResult[0] * sumResult[1] * sumResult[2];
    return finalResult;
}

const result = getProductSum(input, PRODUCT_SUM);
console.log(result);

module.exports = {
    matchThreeSum,
    getProductSum
};

// Output