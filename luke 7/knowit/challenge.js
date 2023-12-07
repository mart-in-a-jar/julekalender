const isPartOfChain = (number, chainString) => {
    return chainString.includes(number.toString());
};

const createChain = (start, end) => {
    const chainArray = [];
    let chainString = "";
    for (let i = start; i < end; i++) {
        if (!isPartOfChain(i, chainString)) {
            chainString += i;
            chainArray.push(i);
        }
    }
    return chainArray;
};

console.log(createChain(0, 100_000).length);
