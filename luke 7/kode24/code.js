const fs = require("fs");

const input = fs.readFileSync("./bids-26-11-2023.dat", "utf-8");

const lines = input.split("\r\n").map((line) => {
    return line.split("\t");
});

const headings = lines.shift();
const bids = {};
headings.forEach((heading) => {
    bids[heading] = [];
});

// { '🐐': [], '🐎': [], '🦔': [], '🐮': [], '🐖': [] }

const highestBid = { animal: null, bid: null };

lines.forEach((line) => {
    for (let i = 0; i < line.length; i++) {
        const bid = +line[i];
        if (bid > highestBid.bid) {
            highestBid.animal = headings[i];
            highestBid.bid = bid;
        }
        bids[headings[i]].push(bid);
    }
});

console.log(highestBid);
