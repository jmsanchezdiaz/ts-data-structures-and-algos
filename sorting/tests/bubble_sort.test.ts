// Template for JEST tests
import bubbleSort from "../bubble_sort";

describe("Bubble sorting tests", () => {
  test("Should sort!", () => {
    const expectedResult1 = [
      [1, 5, 2, 6, 7, 3],
      [1, 2, 3, 5, 6, 7]
    ];
    const expectedResult2 = [[], []];
    const expectedResult3 = [[1], [1]];

    const testCases = [expectedResult1, expectedResult2, expectedResult3];

    testCases.forEach((testCase) => {
      const [input, expected] = testCase;
      bubbleSort(input);
      expect(input).toEqual(expected);
    });
  });
});
