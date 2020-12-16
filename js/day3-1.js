const fs = require("fs");

const INPUT_FILENAME = "input3-1.txt";
// const INPUT_FILENAME = "day3-example.txt";
const TREE_SIGN = "#";

function getTreeCountAlongRoute(grid, x, y, xMove, yMove) {
    const nextX = x+xMove >= grid[y].length ? (x+xMove)%(grid[y].length) : x+xMove;
    const nextY = y+yMove;

    if (nextY >= grid.length) {
        return 0;
    }

    if (grid[nextY][nextX] === TREE_SIGN) {
        return 1;
    }

    return 0;
}

function countTreesInPath(grid, xMove, yMove) {
    let x = 0;
    let y = 0;
    let treeCount = 0;

    while (y < grid.length) {
        treeCount += getTreeCountAlongRoute(grid, x, y, xMove, yMove);

        x += xMove;
        y += yMove;
    }

    return treeCount;
}

function run() {
    const textData = fs.readFileSync(INPUT_FILENAME, "utf8");
    if (!textData) {
        console.error("Invalid input");
        return null;
    }

    const input = textData
        .split("\n");
    console.log(input);

    const slopeTypes = [
        [ 1, 1 ],
        [ 3, 1 ],
        [ 5, 1 ],
        [ 7, 1 ],
        [ 1, 2 ],
    ];

    let multiplierCount = 1;
    for (let i = 0; i < slopeTypes.length; i++) {
        multiplierCount *= countTreesInPath(input, slopeTypes[i][0], slopeTypes[i][1]);
    }

    return multiplierCount;
}

module.exports = {
    run,
    getTreeCountAlongRoute
};