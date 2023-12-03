const fs = require("fs/promises");

const inputFile = "./assets/input.txt";

const readfile = async (file) => {
    const text = await fs.readFile(file, "utf-8");
    return text;
};

const parseText = (input) => {
    const arr = input.split("\n");
    const turnsArr = arr.map((ele) => {
        const newEle = ele.replace(/game \d+: /i, "");
        const subArr = newEle.split(";");
        const newArr = subArr.map((ele) => {
            const subEle = ele.split(",");
            const obj = {};
            subEle.forEach((ele) => {
                const parts = ele.trim().split(" ");
                obj[parts[1]] = +parts[0];
            });
            return obj;
        });
        return newArr;
    });
    return turnsArr;
};

const checkObj = {
    red: 12,
    green: 13,
    blue: 14,
};

const testRound = (inputObj) => {
    for (let color in inputObj) {
        if (inputObj[color] > checkObj[color]) {
            return false;
        }
    }
    return true;
};

const testGame = (inputArr) => {
    for (let obj of inputArr) {
        if (!testRound(obj)) {
            return false;
        }
    }
    return true;
};

const addUp1 = (acc, current, index) => {
    if (testGame(current)) {
        return acc + (index + 1);
    }
    return acc;
};

// Part 2

const findLowest = (arr) => {
    const obj = {};
    arr.forEach((round) => {
        for (let color in round) {
            if (!obj[color]) {
                obj[color] = round[color];
                continue;
            }
            if (round[color] > obj[color]) {
                obj[color] = round[color];
            }
        }
    });
    return obj;
};

const addUp2 = (acc, current) => {
    const lowestColors = findLowest(current);
    const product = Object.values(lowestColors).reduce((acc, current) => {
        return acc * current;
    }, 1);
    return acc + product;
};

const main = async (algorith) => {
    const text = await readfile(inputFile);
    const arr = parseText(text);
    const answer = arr.reduce(algorith, 0);
    console.log(answer);
};

main(addUp1);
main(addUp2);
