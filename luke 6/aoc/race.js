const fs = require("fs");
const path = require("path");

const [rawTimes, rawDistances] = fs
    .readFileSync(path.resolve(__dirname, "input.txt", ""), "utf-8")
    .split("\n");

const times = rawTimes.split(":")[1].match(/\d+/g);
const distances = rawDistances.split(":")[1].match(/\d+/g);
const races = times.map((time, i) => {
    return [time, distances[i]];
});

const getNumberOfWaysToWinRace = (race) => {
    const [time, distance] = race;
    let result = 0;
    for (let i = 0; i < time + 1; i++) {
        if (i * (time - i) > distance) {
            result++;
        }
    }
    return result;
};

const solve = (races) => {
    const answer = races.reduce((acc, current) => {
        return acc * getNumberOfWaysToWinRace(current);
    }, 1);
    console.log(answer);
    return answer;
};

solve(races);

// PART 2

const race = [
    rawTimes.split(":")[1].replaceAll(" ", ""),
    rawDistances.split(":")[1].replaceAll(" ", ""),
];

// This one takes some time to complete
// console.log(getNumberOfWaysToWinRace(race));
