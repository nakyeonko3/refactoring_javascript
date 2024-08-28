var wish = require("wish");
var mocha = require("mocha");
var describe = mocha.describe;
var it = mocha.it;
var deepEqual = require("deep-equal");

function valueFromHand(hand) {
  return hand.map((card) => card.split("-")[0]);
}

function highestCount(values) {
  const counts = {};
  values.forEach((value) => {
    if (counts[value] === undefined) {
      counts[value] = 0;
    }
    counts[value] += 1;
  });
  return Math.max(...Object.values(counts));
}

function multiplesIn(hand) {
  return highestCount(valueFromHand(hand));
}

function isPair(hand) {
  return multiplesIn(hand) === 2;
}

function isTriple(hand) {
  return multiplesIn(hand) === 3;
}

function isQuadruple(hand) {
  return multiplesIn(hand) === 4;
}

function suitFor(hand) {
  return hand.map((card) => card.split("-")[1]);
}

function allTheSameSuit(hand) {
  return highestCount(hand) === hand.length;
}

function isFlush(hand) {
  return allTheSameSuit(suitFor(hand));
}
const checkHand = function (hand) {
  if (isPair(hand)) {
    return "pair";
  } else if (isTriple(hand)) {
    return "three of a kind";
  } else if (isQuadruple(hand)) {
    return "four of a kind";
  } else if (isFlush(hand)) {
    return "flush";
  } else {
    return "high card";
  }
};

// high card가 무엇인가?
// 1. 5장의 카드가 모두 다른 숫자를 가지고 있을 때

// flush가 무엇인가?
// 1. 5장의 카드가 모두 같은 무늬일 때

describe("checkHand", () => {
  it("valueFromHand()", function () {
    const result = valueFromHand(["2-H", "3-C", "4-D", "5-H", "2-C"]);
    wish(deepEqual(result, ["2", "3", "4", "5", "2"]));
  });

  it("highestCount()", function () {
    const result = highestCount(["2", "4", "4", "4", "2"]);
    wish(result === 3);
  });

  it("allthesamesuit()", function () {
    const result = allTheSameSuit(["D", "D", "D", "D", "D"]);
    wish(result);
  });
  it("multiplesIn()", function () {
    const result = multiplesIn(["2-H", "3-C", "4-D", "5-H", "2-C"]);
    wish(result === 2);
  });
  it("should return 'pair'", function () {
    wish(checkHand(["2-H", "3-C", "4-D", "5-H", "2-C"]) === "pair");
    wish(checkHand(["3-H", "3-C", "4-D", "5-H", "2-C"]) === "pair");
  });

  it("should return 'three of a kind'", function () {
    wish(checkHand(["3-H", "3-C", "3-D", "5-H", "2-H"]) === "three of a kind");
  });

  it("handles four of a kind", function () {
    wish(checkHand(["3-H", "3-C", "3-D", "3-S", "2-H"]) === "four of a kind");
  });

  it("handles high card", function () {
    wish(checkHand(["3-H", "5-C", "7-D", "9-S", "2-H"]) === "high card");
  });

  it("flush", function () {
    wish(checkHand(["3-H", "5-H", "7-H", "9-H", "2-H"]) === "flush");
  });

  it("suitfor()", function () {
    const result = suitFor(["3-H", "5-H", "7-H", "9-H", "2-H"]);
    wish(deepEqual(result, ["H", "H", "H", "H", "H"]));
  });
});
