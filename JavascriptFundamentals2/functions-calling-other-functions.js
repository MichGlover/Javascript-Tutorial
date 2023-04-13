"use strict";

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} ${
    applePieces > 1 ? "pieces" : "piece"
  } of ${applePieces > 1 ? "apples" : "apple"} and ${orangePieces} ${
    orangePieces > 1 ? "pieces" : "piece"
  } of ${orangePieces > 1 ? "oranges" : "orange"}`;
  return juice;
}

console.log(fruitProcessor(0, 3));
