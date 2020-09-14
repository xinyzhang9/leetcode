import { quickSort } from '../src/commonSort';
import { expect } from 'chai';
import { isArrayEqual } from '../utils/arrayUtils'

describe('sort', () => {
    it('quick sort', () => {
        let arr = [5,2,3,1]
        console.log(arr.length)
        quickSort(arr, 0, arr.length-1)
        expect(isArrayEqual(arr, [1,2,3,5])).to.be.true
    })
})