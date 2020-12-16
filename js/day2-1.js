const fs = require("fs");

const INPUT_FILENAME = "input2-1.txt";

function isPolicyValid(min, max, letter, password) {
    let letterCount = 0;

    for (let i = 0; i < password.length; i++) {
        if (password[i] === letter) {
            letterCount++;

            if (letterCount > max) {
                return false;
            }
        }
    }

    if (letterCount < min) {
        return false;
    }

    return true;
}

function run() {
    const textData = fs.readFileSync(INPUT_FILENAME, "utf8");

    if (!textData) {
        console.error("Invalid input");
        return null;
    }

    const input = textData
        .split("\n");

    input.pop();
    const passwords = input.map((line) => {
        if (line ==="") {
            return null;
        }

        const [ limits, letter, pwd ] = line.split(" ");

        const [ lowLimit, highLimit ] = limits.split("-");
        console.log(line);
        const letterToCheck = letter[0];

        return {
            lowLimit,
            highLimit,
            letterToCheck,
            pwd
        };
    });

    let validPolicyCount = 0;
    for (let i = 0; i < passwords.length; i++) {
        const { lowLimit, highLimit, letterToCheck, pwd } = passwords[i];

        if (isPolicyValid(lowLimit, highLimit, letterToCheck, pwd)) {
            validPolicyCount++;
        }
    }

    return validPolicyCount;
}

module.exports = {
    run,
    isPolicyValid
};