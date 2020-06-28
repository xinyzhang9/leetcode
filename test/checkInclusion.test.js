import { expect } from 'chai';
import { checkInclusion } from '../src/checkInclusion';

describe('checkInclusion', () => {
    it('passes', () => {
        const s1 = 'ab';
        const s2 = 'eidboaoo';
        expect(checkInclusion(s1, s2)).to.equal(false);
    })
})