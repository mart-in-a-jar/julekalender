// NB: denne feiler med store tall. Måtte lage python-versjon for å finne rett løsning

const input = require("./input");

const parseInput = (input) => {
    return input.split("\n").map((day) => {
        return day.split(",").map((hour) => {
            return +hour;
        });
    });
};

const STARTING_MONEY = 200000;

const findOptimalTrade = (day) => {
    let lowest, highest;
    let biggestDiff = 0;

    for (let i = 0; i < day.length; i++) {
        const numRef = day[i];
        for (let j = i + 1; j < day.length; j++) {
            const numCheck = day[j];
            if (numCheck - numRef > biggestDiff) {
                lowest = numRef;
                highest = numCheck;
                biggestDiff = highest - lowest;
            }
        }
    }
    return { buy: lowest, sell: highest };
};

const calculateMaxNumberOfStocksWhichCanBeBought = (money, price) => {
    return Math.floor(money / price);
};

const calculateDailyWins = (amount, sellPrice) => {
    return amount * sellPrice;
};

const calculateTrade = (money, buyPrice, sellPrice) => {
    const numberBought = calculateMaxNumberOfStocksWhichCanBeBought(
        money,
        buyPrice
    );
    const leftOverMoney = money - numberBought * buyPrice;
    const winnings = numberBought * sellPrice;

    return winnings + leftOverMoney;
};

const calculateDay = (day, initialMoney) => {
    const { buy, sell } = findOptimalTrade(day);

    return calculateTrade(initialMoney, buy, sell);
};

const calculateAllDays = (daysArray, initialMoney) => {
    let money = initialMoney;
    daysArray.forEach((day) => {
        money = calculateDay(day, money);
    });
    console.log(`Nissen sitter igjen med ${money}kr`);
    return money;
};

calculateAllDays(parseInput(input), STARTING_MONEY);

module.exports = {
    findOptimalTrade,
    calculateMaxNumberOfStocksWhichCanBeBought,
    calculateDailyWins,
    calculateTrade,
    calculateDay,
    calculateAllDays,
    parseInput,
};
