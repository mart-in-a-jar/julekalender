const fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf-8");

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

const hasAdjacentStar = (numberObj, fullList) => {
    /* 
    input like:
    { line: 0, number: 130, firstIndex: 30, lastIndex: 32 },
     */
    const createArray = (firstIndex, lastIndex) => {
        return Array.from({ length: lastIndex - firstIndex + 1 }, (_, n) => {
            return firstIndex + n;
        });
    };
    const { line, number, firstIndex, lastIndex } = numberObj;
    const positionsToCheck = {
        // check above
        [line - 1]: createArray(firstIndex - 1, lastIndex + 1),
        // check beside
        [line]: [firstIndex - 1, lastIndex + 1],
        // check below
        [line + 1]: createArray(firstIndex - 1, lastIndex + 1),
    };
    return positionsHasAdjacentStar(number, positionsToCheck, fullList);
};

function positionsHasAdjacentStar(number, positions, fullList) {
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
            if (fullList[line].charAt(index) === "*") {
                return { pos: `${line}-${index}`, number };
            }
            charsToCheck.push(fullList[line].charAt(index));
        }
    }
    return false;
}

/* 
PART 2
 */

// If the character that triggers an 'isPartNumber' is a star, then
// add number and star's position in an object
// if the star has exactly two numbers in its array of partnumbers, it's a gear
// PS If the answer is wrong, consider that a part number might have more than one
// adjacent symbol, and don't return from the loop in 'positionsIncludesSymbol' before checking all positions
// maybe create separate file if the functions has to be modified

const getNumbersWithAdjacentStars = (fullList) => {
    const numbers = findAllNumbers(fullList);
    const numbersWithAdjacentStars = {};
    numbers.forEach((number) => {
        const adjacentStar = hasAdjacentStar(number, fullList);
        if (adjacentStar) {
            if (!numbersWithAdjacentStars[adjacentStar.pos]) {
                numbersWithAdjacentStars[adjacentStar.pos] = [
                    adjacentStar.number,
                ];
            } else {
                numbersWithAdjacentStars[adjacentStar.pos].push(
                    adjacentStar.number
                );
            }
        }
    });
    return numbersWithAdjacentStars;
};

const getGearsWithExactlyTwoAdjacentNumbers = (stars) => {
    return Object.values(stars).filter((star) => {
        return star.length === 2;
    });
};

const sumOfAllGearRatios = (input) => {
    const fullList = parseInput(input);
    const numbersWithStars = getNumbersWithAdjacentStars(fullList);
    const gearsWithExactlyTwoAdjacentNumbers =
        getGearsWithExactlyTwoAdjacentNumbers(numbersWithStars);

    const answer = gearsWithExactlyTwoAdjacentNumbers.reduce((acc, current) => {
        if (current.length !== 2) {
            throw new Error("Feil antall stjerner!");
        }
        const gearProduct = current.reduce((acc, current) => {
            return acc * current;
        }, 1);
        return acc + gearProduct;
    }, 0);
    console.log(answer);
    return answer;
};

sumOfAllGearRatios(input);

module.exports = {
    sumOfAllGearRatios,
};
