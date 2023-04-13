"use strict";

const calcAverage = (num1, num2, num3) => (num1 + num2 + num3) / 3;

const dolphinsAverage = calcAverage(44, 23, 71);
const koalasAverage = calcAverage(65, 54, 49);

console.log(dolphinsAverage, koalasAverage);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  } else console.log(`No team wins`);
}

checkWinner(dolphinsAverage, koalasAverage);
