const _ = require("lodash");

const overlappingDigits = new Map([
  ["eightwo", "eighttwo"],
  ["eighthree", "eightthree"],
  ["eighten", "eightten"],
  ["oneight", "oneeight"],
  ["threeight", "threeeight"],
  ["fiveight", "fiveeight"],
  ["sevenine", "sevennine"],
  ["nineight", "nineeight"],
  ["tenine", "tennine"],
  ["twone", "twoone"],
]);

const digitsAsStrings = new Map([
  ["one", "1"],
  ["two", "2"],
  ["three", "3"],
  ["four", "4"],
  ["five", "5"],
  ["six", "6"],
  ["seven", "7"],
  ["eight", "8"],
  ["nine", "9"],
  ["ten", "10"],
]);

const getSearchValue = (digitMap) => {
  const searchValue = Array.from(digitMap.keys())
    .toString()
    .replaceAll(",", "|");
  return new RegExp(searchValue, "gi");
};
const getCalibrationValues = (value) => {
  const newValue = value
    .replaceAll(getSearchValue(overlappingDigits), (digit) =>
      overlappingDigits.get(digit),
    )
    .replaceAll(getSearchValue(digitsAsStrings), (digit) =>
      digitsAsStrings.get(digit),
    );

  const onlyNumbers = newValue.replace(/\D/g, "");
  const firstNumber = onlyNumbers[0];
  const lastNumber = onlyNumbers.substring(onlyNumbers.length - 1);

  return parseInt(firstNumber + lastNumber);
};

const calibrate = (lines) => {
  const calibrationValues = lines.map(getCalibrationValues);

  return _.sum(calibrationValues);
};

module.exports = calibrate;
