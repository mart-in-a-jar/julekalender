const fs = require("fs");
const path = require("path");
const file = path.resolve(__dirname, "rekke.txt");

const input = fs.readFileSync(file, "utf-8");
const rekke = input.match(/\d+, \d+/g).map((tuple) => {
    const [x, y] = tuple.split(", ");
    return [+x, +y];
});

const sort = (rekke) => {
    const sorted = [rekke.shift()];
    while (rekke.length) {
        const first = sorted[0];
        const last = sorted[sorted.length - 1];
        for (let i = 0; i < rekke.length; i++) {
            const tuple = rekke[i];
            if (
                tuple[0] === last[1] ||
                tuple[0] === last[0] ||
                tuple[1] === last[0] ||
                tuple[1] === last[1]
            ) {
                sorted.push(tuple);
                rekke.splice(i, 1);
                break;
            }
            if (
                tuple[1] === first[0] ||
                tuple[1] === first[1] ||
                tuple[0] === first[1] ||
                tuple[0] === first[0]
            ) {
                sorted.unshift(tuple);
                rekke.splice(i, 1);
                break;
            }
        }
    }
    return sorted;
};
console.time("Time");
const sorted = sort(rekke);
const res = sorted[Math.floor(sorted.length / 2)];
console.log(res[0] + res[1]);
console.timeEnd("Time");
