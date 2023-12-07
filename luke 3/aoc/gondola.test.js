const fnc = require("./gondola");
const fnc2 = require("./gondola part2");

const testInput = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`;

describe("Tester for gondol-oppgave", () => {
    test("Gjenkjenner delenummer", () => {
        expect(fnc.isValidSymbol("+")).toBe(true);
        expect(fnc.isValidSymbol("*")).toBe(true);
        expect(fnc.isValidSymbol("#")).toBe(true);
        expect(fnc.isValidSymbol("@")).toBe(true);
        expect(fnc.isValidSymbol("/")).toBe(true);
        expect(fnc.isValidSymbol("-")).toBe(true);
    });
    test("Skal ikke godta ugyldige delenummer", () => {
        expect(fnc.isValidSymbol(".")).toBe(false);
        expect(fnc.isValidSymbol("2")).toBe(false);
    });
    test("Finner tall på linje, samt deres plassering", () => {
        expect(fnc.findNumbers(`....64/...\\210...19`, 2)).toStrictEqual([
            { line: 2, number: 64, firstIndex: 4, lastIndex: 5 },
            { line: 2, number: 210, firstIndex: 11, lastIndex: 13 },
            { line: 2, number: 19, firstIndex: 17, lastIndex: 18 },
        ]);
    });
    // test("Finner ut om tall er et delenummer");

    test("Kalkulerer sum av delenummer", () => {
        expect(fnc.calculateSumOfPartNumbers(testInput)).toBe(4361);
    });
    test("Kalkulerer 'gear ratio'", () => {
        expect(fnc2.sumOfAllGearRatios(testInput)).toBe(467835);
    });
});
