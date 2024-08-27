var wish = require("wish");
var mocha = require("mocha");
var describe = mocha.describe;
var it = mocha.it;

const isPair = function () {};
const checkHand = function (hand) {
  if (isPair()) {
    return "pair";
  } else {
    return "three of a kind";
  }
};

describe("checkHand", () => {
  it("should return 'pair'", () => {
    wish(checkHand(["2-H", "3-C", "4-D", "5-H", "2-C"]) === "pair");
    wish(checkHand(["3-H", "3-C", "4-D", "5-H", "2-C"]) === "pair");
  });

  it("should return 'three of a kind'", () => {
    wish(checkHand(["3-H", "3-C", "3-D", "5-H", "2-H"]) === "three of a kind");
  });
});
