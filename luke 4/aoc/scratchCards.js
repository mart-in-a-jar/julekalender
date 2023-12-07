const input = require("./input");

const parseInput = (rawInput) => {
    const cards = rawInput.split("\n").map((line) => {
        return line
            .replace(/Card\s+\d+: /, "")
            .split("|")
            .map((side) => {
                return side.match(/\d+/g);
            });
    });
    const parsedCards = cards.map((line) => {
        return { winningNumbers: line[0], numbers: line[1] };
    });

    return parsedCards;
};

const getWinningNumbersAmount = (card) => {
    let winningNumbersAmount = 0;
    for (const num of card.winningNumbers) {
        if (card.numbers.includes(num)) {
            winningNumbersAmount++;
        }
    }
    return winningNumbersAmount;
};

const calculatePoints = (numberOfWinningNumbers) => {
    if (numberOfWinningNumbers < 1) {
        return 0;
    }
    return 1 * 2 ** (numberOfWinningNumbers - 1);
};

const calclateSum = (acc, current) => {
    const currentPoints = calculatePoints(current);
    return acc + currentPoints;
};

const sumOfPoints = (input) => {
    const cardsList = parseInput(input);
    const winningNumbersAmountArray = cardsList.map((card) => {
        return getWinningNumbersAmount(card);
    });

    const sumTotal = winningNumbersAmountArray.reduce(calclateSum, 0);
    console.log(sumTotal);
    return sumTotal;
};

sumOfPoints(input);

// PART 2

const calculateTotalCards = (input) => {
    const cardList = parseInput(input);
    const winningNumbersAmountArray = cardList.map((card) => {
        return getWinningNumbersAmount(card);
    });

    let totalCards = 0;

    for (let i = 0; i < winningNumbersAmountArray.length; i++) {
        totalCards++;
        if (winningNumbersAmountArray[i] === 0) {
            continue;
        }
        totalCards += addScratchCards(i, winningNumbersAmountArray);
    }
    console.log(totalCards);
    return totalCards;
};

const addScratchCards = (cardNumber, winningArray) => {
    const cardWinnings = winningArray[cardNumber];
    totalCards = winningArray.length;
    let addAmount = 0;
    const rewardCardsAmount = Math.min(cardWinnings, totalCards - cardNumber);
    for (let i = 0; i < rewardCardsAmount; i++) {
        addAmount++;
        if (cardNumber + 1 < totalCards) {
            addAmount += addScratchCards(cardNumber + i + 1, winningArray);
        }
    }
    return addAmount;
};

calculateTotalCards(input);

module.exports = { calculatePoints, sumOfPoints, calculateTotalCards };
