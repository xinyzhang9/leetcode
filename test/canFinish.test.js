import { checkInclusion, canFinish } from '../src/canFinish';
import { expect } from 'chai';

describe('can finish', () => {
    it('can work', () => {
        expect(canFinish(2, [[1,0]])).to.be.true
    })

    it('can not work', () => {
        expect(canFinish(2, [[1,0],[0,1]])).to.be.false
    })
})