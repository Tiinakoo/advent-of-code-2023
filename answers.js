const calibrate = require("./day1");
const readFileLines = require("./readFile");

const fileLines = readFileLines("day1Input.txt");
const day1 = calibrate(fileLines);
console.log({ day1 });
