const input = require("./input");

const parseInput = (input) => {
    return input.split("\n").map((line) => {
        return line.split(",");
    });
};

const sumTravelDistance = (coordinates) => {
    let totalDistance = 0;
    for (let i = 1; i < coordinates.length; i++) {
        const [xCurrent, yCurrent] = coordinates[i];
        const [xLast, yLast] = coordinates[i - 1];

        const traveledDistance = Math.sqrt(
            Math.abs(xCurrent - xLast) ** 2 + Math.abs(yCurrent - yLast) ** 2
        );
        totalDistance += traveledDistance;
    }

    return totalDistance;
};

const calculateFood = (numberOfRaindeer, travelDistance) => {
    // 1kg / 1000km
    return Math.ceil((travelDistance / 1000) * numberOfRaindeer);
};

const main = () => {
    console.log(calculateFood(9, sumTravelDistance(parseInput(input))));
};

main();
