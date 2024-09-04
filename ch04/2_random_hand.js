const assert = require("assert");
const wish = require("wish");
var s = ["H", "D", "S", "C"];
var v = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var c = [];
var rS = function () {
  return s[Math.floor(Math.random() * s.length)];
};
var rV = function () {
  return v[Math.floor(Math.random() * v.length)];
};
var rC = function () {
  return rV() + "-" + rS();
};

var doIt = function () {
  var c = [];
  c.push(rC());
  c.push(rC());
  c.push(rC());
  c.push(rC());
  c.push(rC());
  return c;
};

// const { describe } = require("mocha");
// console.log(doIt());

describe("doIt()", function () {
  it("returns something with a length of 5", function () {
    wish(doIt().length === 5);
  });
});

describe("rC()", function () {
  it("returns match for card", function () {
    wish(rC().match(/([1-9]|10|J|K|Q|A)-[HDSC]/));
  });
});
describe("rV()", function () {
  it("returns match for card value", function () {
    wish(rV().match(/([1-9]|10|J|K|Q|A)/));
  });
});
describe("rS()", function () {
  it("returns match for suit", function () {
    wish(rS().match(/[HDSC]/));
  });
});
