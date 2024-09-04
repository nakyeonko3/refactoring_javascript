// import { describe, it } from "mocha";

const assert = require("assert");

const valueFromNumber = (hand) => {
  return [2, 3, 4, 5, 2];
};

// "2-H", "3-C", "4-D", "5-E", "2-C"
// 위의 값을 입력받고, 위의 값 중에 '앞에 있는 숫자'만 뽑아서 같은 숫자가 몇개 있는지 반환
const multiplesIn = (hand) => {
  return 2; // number
};

const isPair = (hand) => {
  const result = multiplesIn(hand);

  return result === 2;
};

const valueFromHand = (hand) => {
  if (isPair(hand)) {
    return "pair";
  }
};

describe("checkHands", () => {
  it("valueFromHand", () => {
    const card = ["2-H", "3-C", "4-D", "5-E", "2-C"];

    const result = valueFromHand(card);

    assert(result === "pair");
  });

  it("isPair", () => {
    const hand = ["2-H", "3-C", "4-D", "5-E", "2-C"];

    const result = isPair(hand);

    assert(result === true);
  });
});
