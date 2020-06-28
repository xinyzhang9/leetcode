import { expect } from 'chai';
import { reverseList, reverseList2 } from '../src/reverseList';
import { makeList, printList, compareList } from '../utils/linkedListUtil';
describe('reverseList', () => {
    it('iterator', () => {
        let head = makeList([1,2,3,4,5]);
        expect(compareList(printList(reverseList2(head)), [5,4,3,2,1])).to.be.true;
    })

    it('recursion', () => {
        let head = makeList([1,2,3,4,5]);
        expect(compareList(printList(reverseList(head)), [5,4,3,2,1])).to.be.true;
    })
})

