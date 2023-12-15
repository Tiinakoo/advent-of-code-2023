const calibrate = require("../day1");

describe("calibrates input with digits", () => {
  it("contains both numbers and letters", () => {
    const testInput = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"];

    expect(calibrate(testInput)).toBe(142);
  });

  it("contains numbers, letters and digits spelled out with letters", () => {
    const testInputWithStringDigits = [
      "two1nine",
      "eightwothree",
      "abcone2threexyz",
      "xtwone3four",
      "4nineeightseven2",
      "zoneight234",
      "7pqrstsixteen",
    ];

    expect(calibrate(testInputWithStringDigits)).toBe(281);
  });

  it("contains overlapping letters before number", () => {
    expect(calibrate(["xtwone3four"])).toBe(24);
  });

  it("contains overlapping letters after number", () => {
    expect(calibrate(["cnhflx4sevensixonethree"])).toBe(43);
  });

  it("contains only digits as strings", () => {
    expect(calibrate(["thfiveonenine"])).toBe(59);
  });

  it("contains overlapping digits", () => {
    expect(calibrate(["eight8884zbdzcsseventwonexgg"])).toBe(81);
  });
});
