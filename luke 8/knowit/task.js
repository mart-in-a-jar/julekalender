const fs = require("fs");
const path = require("path");

const alphabet = "abcdefghijklmnopqrstuvwxyzæøå".split("");
const textFile = path.resolve(__dirname, "cypher.txt");
const keysFile = path.resolve(__dirname, "input.txt");

const keys = fs
    .readFileSync(keysFile, "utf-8")
    .split("\n")
    .map((line) => {
        return JSON.parse(line);
    });
const words = fs.readFileSync(textFile, "utf-8").match(/.*?\s+/g);

const translateWord = (word, keys) => {
    const wordArray = word.split("");
    const cypher = keys.map((ele) => {
        return alphabet[ele];
    });
    const newWordArray = wordArray.map((char) => {
        return translateChar(char, cypher);
    });
    return newWordArray.join("");
};

const translateChar = (char, cypher) => {
    if (!alphabet.includes(char)) {
        return char;
    }
    const newChar = alphabet[cypher.indexOf(char)];
    return newChar;
};

const solve = () => {
    const solution = [];
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const cypher = keys[i];
        if (word === "") {
            solution.push("\n");
            continue;
        }
        const newWord = translateWord(word, cypher);
        solution.push(newWord);
    }

    fs.writeFileSync("./solution.txt", solution.join(""));
};

solve();
