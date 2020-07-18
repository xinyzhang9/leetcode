import { expect } from 'chai'
import {isInterleave} from '../src/isInterLeave'
describe('isInterLeave', () => {
    it('should work', () => {
        const s1 = "aabcc"
        const s2 = "dbbca"
        const s3 = "aadbbcbcac"
        expect(isInterleave(s1, s2, s3)).to.be.true
    })
})