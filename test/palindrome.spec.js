const isPalindrome = require('../palindromeChecker')
describe('palindrome tests', function() {
    it('when empty returns true', function() {
        //input
        const input = "";
        //expected
        const expected = true;
        //actual
        const actual = isPalindrome(input);
        //assert
        expect(actual).toBe(expected);
    })
    it('when wow returns true', function() {
        const input = "wow";
        const expected = true;
        const actual = isPalindrome(input);
        expect(actual).toBe(expected);
    })
    it('when adfadf returns false', function() {
        const input = "adfadf";
        const expected = false;
        const actual = isPalindrome(input);
        expect(actual).toBe(expected);
    })
    it('when null returns false', function() {
        const input = null;
        const expected = false;
        const actual = isPalindrome(input);
        expect(actual).toBe(expected);
    })
})