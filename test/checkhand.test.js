var wish = require("wish");
var mocha = require("mocha");
var describe = mocha.describe;
var it = mocha.it;
var deepEqual = require("deep-equal");

const checkHand = function (hand) {
  if (isPair()) {
    return "pair";
  } else {
    return "three of a kind";
  }
};

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

describe("checkHand", () => {
  it("valueFromHand()", function () {
    const result = valueFromHand(["2-H", "3-C", "4-D", "5-H", "2-C"]);
    wish(deepEqual(result, ["2", "3", "4", "5", "2"]));
  });

  it("highestCount()", function () {
    wish(highestCount(["2", "4", "4", "4", "2"]) === 3);
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
});
