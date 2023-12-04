const exp = require("constants");
const fnc = require("./aksjenisse");

describe("Tester for aksjenissen", () => {
    test("Finn optimal trade for en dag", () => {
        expect(
            fnc.findOptimalTrade([143, 217, 153, 192, 200, 215, 1])
        ).toStrictEqual({
            buy: 143,
            sell: 217,
        });
        expect(
            fnc.findOptimalTrade([244, 92, 221, 140, 140, 104])
        ).toStrictEqual({
            buy: 92,
            sell: 221,
        });
    });
    test("Hvor mange aksjer kan nissen kjøpe?", () => {
        expect(fnc.calculateMaxNumberOfStocksWhichCanBeBought(1000, 65)).toBe(
            15
        );
    });
    test("Regn ut dagens gevinst", () => {
        expect(fnc.calculateDailyWins(15, 648)).toBe(9720);
    });
    test("Regn ut penger etter endt dag", () => {
        expect(fnc.calculateTrade(1000, 65, 213)).toBe(3220);
    });
    test("Regn ut hele handelen med dagens array som input", () => {
        expect(fnc.calculateDay([112, 85, 65, 192, 172, 213], 1000)).toBe(3220);
    });

    const testInput = `112,85,65,192,172,213  
    165,146,188,102,119,156  
    123,187,92,71,208,148`;
    const testStartingMoney = 1000;

    test("Regn ut sum etter flere dager", () => {
        expect(
            fnc.calculateAllDays(fnc.parseInput(testInput), testStartingMoney)
        ).toBe(14210);
    });
});
