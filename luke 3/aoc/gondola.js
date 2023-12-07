const fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf-8");

const isValidSymbol = (char) => {
    const reg = new RegExp(/^[^\d\.]$/);
    return reg.test(char);
};

const parseInput = (input) => {
    return input.split("\n");
};

const findNumbers = (line, lineNumber) => {
    const numberRegEx = /\d+/g;
    let res;
    const returnArr = [];
    while ((res = numberRegEx.exec(line)) !== null) {
        returnArr.push({
            line: lineNumber,
            number: +res[0],
            firstIndex: res.index,
            lastIndex: numberRegEx.lastIndex - 1,
        });
    }
    return returnArr;
};

const findAllNumbers = (lineArray) => {
    let returnArr = [];
    for (let i = 0; i < lineArray.length; i++) {
        returnArr = returnArr.concat(findNumbers(lineArray[i], i));
    }
    return returnArr;
};

const isPartNumber = (numberObj, fullList) => {
    /* 
    input like:
    { line: 0, number: 130, firstIndex: 30, lastIndex: 32 },
     */
    const createArray = (firstIndex, lastIndex) => {
        return Array.from({ length: lastIndex - firstIndex + 1 }, (_, n) => {
            return firstIndex + n;
        });
    };
    const { line, firstIndex, lastIndex } = numberObj;
    const positionsToCheck = {
        // check above
        [line - 1]: createArray(firstIndex - 1, lastIndex + 1),
        // check beside
        [line]: [firstIndex - 1, lastIndex + 1],
        // check below
        [line + 1]: createArray(firstIndex - 1, lastIndex + 1),
    };
    return positionsIncludesSymbol(positionsToCheck, fullList);
};

function positionsIncludesSymbol(positions, fullList) {
    /* 
    positions:
    {
    '0': [ 29, 33 ],
    '1': [ 29, 30, 31, 32, 33 ],
    '-1': [ 29, 30, 31, 32, 33 ]
    }
     */
    const charsToCheck = [];
    // find characters to check
    for (line in positions) {
        if (!fullList[line]) {
            // out of bounds: first or last line
            continue;
        }
        for (index of positions[line]) {
            if (!fullList[line].charAt(index)) {
                continue;
            }
            charsToCheck.push(fullList[line].charAt(index));
        }
    }
    // check each character
    for (char of charsToCheck) {
        if (isValidSymbol(char)) {
            return true;
        }
    }
    return false;
}

const getAllPartNumbers = (fullList) => {
    const numbers = findAllNumbers(fullList);
    const partNumbers = numbers.filter((number) => {
        return isPartNumber(number, fullList);
    });
    return partNumbers.map((number) => {
        return number.number;
    });
};

const calculateSumOfPartNumbers = (input) => {
    const fullList = parseInput(input);
    const partNumbers = getAllPartNumbers(fullList);
    const sumOfPartNumbers = partNumbers.reduce((acc, current) => {
        return acc + current;
    });
    console.log(sumOfPartNumbers);
    return sumOfPartNumbers;
};

calculateSumOfPartNumbers(input);

module.exports = {
    isValidSymbol,
    calculateSumOfPartNumbers,
    findNumbers,
};
