const input = require("./input");
const array = input.split(",");

for (let i = 0; i < array.length; i++) {
    array[i] = array[i].trim().split(" på ");
}

const resetPins = (obj) => {
    for (let i = 1; i <= 7; i++) {
        obj[i] = false;
    }
};

const pins = {};
resetPins(pins);

let solvedLocks = 0;

array.forEach((pin) => {
    if (pin[0] === "klikk") {
        pins[pin[1]] = true;
    } else if (pin[0] === "klakk") {
        pins[pin[1]] = false;
    }

    if (
        Object.values(pins).every((val) => {
            return val;
        })
    ) {
        solvedLocks++;
        resetPins(pins);
    }
});

console.log(solvedLocks);
