const input = require("./input");

const calculateLongestStreak = (sessions) => {
    let longestStreak = [];
    let currentStreak = [];
    let last = -Infinity;

    for (let i = 0; i < sessions.length; i++) {
        const currentNumber = sessions[i];
        if (currentNumber < last) {
            // If current number is lower than last, break cycle and assert if streak is the longest
            if (currentStreak.length === longestStreak.length) {
                // If equal, swap if sum is larger
                const newOneIsBetter =
                    calculateSitupsInStreak(currentStreak) >
                    calculateSitupsInStreak(longestStreak);
                if (newOneIsBetter) {
                    longestStreak = currentStreak.slice();
                }
            }
            if (currentStreak.length > longestStreak.length) {
                longestStreak = currentStreak.slice();
            }
            currentStreak = [];
            currentStreak.push(currentNumber);
        } else {
            // Current is larger than last
            currentStreak.push(currentNumber);
        }
        last = currentNumber;
    }
    return longestStreak;
};

const calculateSitupsInStreak = (streakArray) => {
    return streakArray.reduce((acc, current) => {
        return acc + current;
    });
};

const convertToNumbers = (arr) => {
    return arr.map((ele) => +ele);
};

const calculateAll = (input) => {
    let sessions = input.split(", ");
    sessions = convertToNumbers(sessions);
    const longestStreak = calculateLongestStreak(sessions);
    const situpsInStreak = calculateSitupsInStreak(longestStreak);
    console.log(situpsInStreak);
    return situpsInStreak;
};

calculateAll(input);
