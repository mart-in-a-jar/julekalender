const fs = require("fs/promises");

const bets = [
  [1, 1.71],
  [2, 2.24],
  [2, 2.32],
  [1, 1.73],
  [3, 2.77],
  [1, 1.65],
  [3, 2.81],
  [1, 1.71],
  [2, 1.94],
  [2, 2.09],
  [3, 2.69],
  [2, 2.14],
  [1, 1.67],
  [2, 2.08],
  [1, 1.71],
  [3, 2.64],
  [1, 1.66],
  [2, 2.29],
  [1, 1.69],
  [2, 2.24],
  [1, 1.69],
  [1, 1.72],
  [2, 2.14],
  [2, 2.26],
  [2, 2.19],
  [1, 1.79],
  [1, 1.67],
  [1, 1.72],
  [2, 2.18],
  [1, 1.72],
  [2, 2.12],
  [1, 1.74],
  [1, 1.71],
  [2, 2.19],
  [1, 1.69],
  [1, 1.77],
  [1, 1.78],
  [1, 1.74],
  [2, 2.22],
  [1, 1.72],
  [4, 4.39],
  [2, 2.31],
  [1, 1.74],
  [3, 2.87],
  [1, 1.81],
  [2, 2.21],
  [2, 2.16],
  [2, 2.38],
  [1, 1.7],
  [2, 2.27],
  [1, 1.68],
  [2, 2.19],
  [1, 1.78],
  [1, 1.77],
  [1, 1.69],
  [1, 1.72],
  [1, 1.67],
  [2, 2.08],
];

const goals = [
  2, 0, 1, 3, 3, 1, 2, 1, 1, 3, 2, 1, 0, 0, 2, 0, 0, 0, 1, 0, 0, 1, 2, 1, 0, 0,
  0, 0, 1, 3, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 5, 3, 0, 2, 1, 2, 1, 0, 1, 1, 1, 0,
  0, 1, 0, 0, 0, 0,
];

const gamblePercentage = 17.5;
const originalAmount = 50000;

let currentAmount = originalAmount;

const writeToFile = async (text) => {
  await fs.writeFile("./alvLuke.txt", text);
};

let text = "";

for (let i = 0; i < bets.length; i++) {
  text += `Runde ${i + 1}\n`;
  text += `Current amount: ${currentAmount}\n`;
  gambleAmount = Math.round((currentAmount * gamblePercentage) / 100);
  text += `Stake: ${gambleAmount}\n`;
  const bet = bets[i][0];
  const odds = bets[i][1];
  const scoredGoals = goals[i];

  text += `Scored: ${scoredGoals}\n`;
  text += `Betted: ${bet} with ${odds} in odds\n`;

  const haveWon = bet <= scoredGoals;
  const adjustAmount = Math.round(
    haveWon ? gambleAmount * odds : -gambleAmount
  );
  text += haveWon ? `She won ${adjustAmount}\n` : `She lost ${adjustAmount}\n`;

  text += `Current amount: ${currentAmount} + ${adjustAmount} = ${
    currentAmount + adjustAmount
  }\n`;
  text += "--------------------------------------------------------\n";
  currentAmount += adjustAmount;
}

text += `Total lost: ${originalAmount - currentAmount}`;

writeToFile(text);

console.log(`Sum: ${currentAmount}`);
console.log(`Lost ${originalAmount - currentAmount}`);
