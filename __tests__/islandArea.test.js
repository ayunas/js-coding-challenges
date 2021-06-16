const { expect } = require('@jest/globals');
const { findConsecutiveOnes, firstOne } = require('../islandArea');

describe("islandArea",() => {
    test("findConsecutiveOnes([1,1,1]) is 3", () => {
        expect(findConsecutiveOnes([1,1,1])).toBe(3);
    });

    test("[0,0,0] => findOnes() => 0", () => {
        const expected = 0;
        const actual = findConsecutiveOnes([0,0,0]);
        expect(actual).toBe(expected);
    });

    test("firstOne() works", () => {
        const expected = 1;
        const actual = firstOne([0,1]);
        expect(actual).toBe(expected);
    })

})