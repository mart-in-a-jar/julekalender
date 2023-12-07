const fnc = require("./summeDelePrimtall");

test("Vurderer primtall rett", () => {
    expect(fnc.isPrime(1)).toBe(false);
    expect(fnc.isPrime(2)).toBe(true);
    expect(fnc.isPrime(0)).toBe(false);
    expect(fnc.isPrime(3)).toBe(true);
    expect(fnc.isPrime(4)).toBe(false);
    expect(fnc.isPrime(15)).toBe(false);
    expect(fnc.isPrime(17)).toBe(true);
});
test("Klarer oppgaven", () => {
    expect(fnc.isSummeDelePrimtall(18)).toBe(true);
    expect(fnc.isSummeDelePrimtall(9015)).toBe(true);
    expect(fnc.isSummeDelePrimtall(9016)).toBe(false);
});
