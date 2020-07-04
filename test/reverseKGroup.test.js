import { expect } from 'chai';
import { reverseKGroup } from '../src/reverseKGroup';
import { makeList, printList, compareList } from '../utils/linkedListUtil';
describe('reverseKGroup', () => {
    it('should work', () => {
        let head = makeList([1,2,3,4,5]);
        expect(compareList(printList(reverseKGroup(head, 2)), [2,1,4,3,5])).to.be.true;
    })
})
