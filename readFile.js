const { readFileSync } = require("fs");

const readFileLines = (filename) =>
  readFileSync(filename)
    .toString("UTF8")
    .split(/\r?\n/)
    .filter((line) => !!line);

module.exports = readFileLines;
