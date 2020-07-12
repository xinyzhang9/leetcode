import { expect } from 'chai';
import { nextPermutation } from '../src/nextPerm'
import { isArrayEqual } from '../utils/arrayUtils'
describe('next permutation', () => {
    it('[1,2,3]', () => {
        let nums = [1,2,3]
        nextPermutation(nums)
        expect(isArrayEqual(nums, [1,3,2])).to.be.true
    })

    it('[1,1]', () => {
        let nums = [1,1]
        nextPermutation(nums)
        expect(isArrayEqual(nums, [1,1])).to.be.true
    })
})
