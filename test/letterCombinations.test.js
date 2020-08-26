import { letterCombinations } from '../src/letterCombinations';
import { expect } from 'chai';
import { isArrayEqual } from '../utils/arrayUtils'
describe('letter combinations', () => {
    it('should work', () => {
        expect(isArrayEqual(
            letterCombinations("23"),
            ["ad","ae","af","bd","be","bf","cd","ce","cf"]))
            .to.be.true
    })
})
