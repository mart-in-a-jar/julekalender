const fs = require("fs/promises");

const readFile = async (file) => {
    const fileContent = await fs.readFile(file, "utf-8");

    return fileContent;
};

const toArray = (string) => {
    return string.split("\n");
};

const solveLine = (string) => {
    // find first and last int in string, put them together
    const l = string.length;
    let first, last;

    for (let i = 0; i < l; i++) {
        if (!isNaN(+string[i])) {
            first = string[i];
            break;
        }
    }
    for (let i = string.length - 1; i >= 0; i--) {
        if (!isNaN(+string[i])) {
            last = string[i];
            break;
        }
    }
    return +(first + last);
};

const solveLine2 = (string) => {
    // find words

    const words = {
        one: "1",
        two: "2",
        three: "3",
        four: "4",
        five: "5",
        six: "6",
        seven: "7",
        eight: "8",
        nine: "9",
    };

    const wordsInString = {};
    for (let i in words) {
        const reg = new RegExp(i, "g");
        let result;
        while ((result = reg.exec(string.toLowerCase()))) {
            wordsInString[result.index] = i;
        }
    }

    const firstIndex = Math.min(...Object.keys(wordsInString));
    let firstNumber = words[wordsInString[firstIndex]];
    const lastIndex = Math.max(...Object.keys(wordsInString));
    let lastNumber = words[wordsInString[lastIndex]];

    // find digits

    const l = string.length;
    let first, last;

    for (let i = 0; i < l; i++) {
        if (!isNaN(+string[i])) {
            first = { index: i, num: string[i] };
            break;
        }
    }
    for (let i = string.length - 1; i >= 0; i--) {
        if (!isNaN(+string[i])) {
            last = { index: i, num: string[i] };
            break;
        }
    }

    if (first.index < firstIndex) {
        firstNumber = first.num;
    }
    if (last.index > lastIndex) {
        lastNumber = last.num;
    }

    const result = +(firstNumber + lastNumber);
    return result;
};

const addUp = (last, current) => {
    return solveLine(current) + last;
};

const addUp2 = (last, current) => {
    return solveLine2(current) + last;
};

const main = async (algorithm) => {
    const calibrationDoc = await readFile("./assets/calibrationDoc.txt");
    const array = toArray(calibrationDoc);

    const answer = array.reduce(algorithm, 0);
    console.log(answer);
};

main(addUp);
main(addUp2);