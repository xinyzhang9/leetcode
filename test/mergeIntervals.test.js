import { expect } from 'chai'
import { merge } from '../src/mergeIntervals'
import { is2dArrayEqual } from '../utils/arrayUtils'
describe('merge intervals', () => {
    it('should work', () => {
        let intervals = [[2,3],[2,2],[3,3],[1,3],[5,7],[2,2],[4,6]];
        expect(is2dArrayEqual(merge(intervals),[[1,3], [4,7]])).to.be.true
    })
})
