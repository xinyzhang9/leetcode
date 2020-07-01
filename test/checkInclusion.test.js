import { checkInclusion } from '../src/checkInclusion';
import { expect } from 'chai';

describe('checkInclusion', () => {
    it('false', () => {
        const s1 = 'ab';
        const s2 = 'eidboaoo';
        expect(checkInclusion(s1, s2)).to.equal(false);
    })

    it('true', () => {
        const s1 = 'ab';
        const s2 = 'eidbaooo';
        expect(checkInclusion(s1, s2)).to.equal(true);
    })
})