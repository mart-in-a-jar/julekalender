const isSummeDelePrimtall = (number) => {
    const numberParts = number
        .toString()
        .split("")
        .map((num) => +num);
    const sumOfNumberParts = numberParts.reduce((acc, current) => {
        return acc + current;
    });
    const numberToCheck = number / sumOfNumberParts;

    return isPrime(numberToCheck);
};

const isPrime = (number) => {
    if (!Number.isInteger(number)) {
        return false;
    }
    if (number < 2) {
        return false;
    }

    for (let i = 2; i * i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
};

const getAmountOfSummeDelePrimtall = (from, to) => {
    let amount = 0;

    for (let i = from + 1; i < to; i++) {
        if (isSummeDelePrimtall(i)) {
            amount++;
        }
    }
    console.log(amount);
    return amount;
};

getAmountOfSummeDelePrimtall(1, 100_000_000);

module.exports = { isSummeDelePrimtall, isPrime };
