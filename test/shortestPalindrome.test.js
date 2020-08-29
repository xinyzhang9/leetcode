import { shortestPalindrome } from '../src/shortestPalindrome';
import { expect } from 'chai';

describe('shortest palindrome', () => {
    it('should work', () => {
        expect(shortestPalindrome("aacecaaa")).to.equal("aaacecaaa")
    })
})