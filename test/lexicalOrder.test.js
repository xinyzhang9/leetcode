import { lexicalOrder } from '../src/lexicalOrder';
import { expect } from 'chai';
import { isArrayEqual } from '../utils/arrayUtils'

describe('lexical order', () => {
    it('n = 13', () => {
        expect(isArrayEqual(lexicalOrder(13),[1,10,11,12,13,2,3,4,5,6,7,8,9])).to.be.true
    })
})