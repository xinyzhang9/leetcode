import { expect } from 'chai';
import { threeSum } from '../src/threeSum';

describe('threeSum', () => {
    it('should work', () => {
        const input = [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6];
        const ans = [[-4,-2,6],[-4,0,4],[-4,1,3],[-4,2,2],[-2,-2,4],[-2,0,2]];
        expect(compareResult(threeSum(input), ans)).to.be.true;
    })
})

const compareResult = function(a, b) {
    if(a.length !== b.length) return false;
    for(let num of a) {
        let sum = 0;
        for(let n of num) {
            sum += n;
        }
        if(sum !== 0) return false;
    }
    return true;
}