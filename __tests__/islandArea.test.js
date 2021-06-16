const { expect } = require('@jest/globals');
const { findConsecutiveOnes } = require('../islandArea');

describe("islandArea",() => {
    test("findConsecutiveOnes([1,1,1]) is 3", () => {
        expect(findConsecutiveOnes([1,1,1])).toBe(3);
    });

    test("[0,0,0] => findOnes() => 0", () => {
        const expected = 0;
        const actual = findConsecutiveOnes([0,0,0]);
        expect(actual).toBe(expected);
    });
    

})