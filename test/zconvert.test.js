import { convert } from '../src/zconvert';
import { expect } from 'chai';

describe('zconvert', () => {
    it('PAYPALISHIRING, 3', () => {
        const str = "PAYPALISHIRING"
        const n = 3
        expect(convert(str,n)).to.equal("PAHNAPLSIIGYIR")
    })

    it('AB, 1', () => {
        const str = "AB"
        const n = 1
        expect(convert(str,n)).to.equal("AB")
    })
})