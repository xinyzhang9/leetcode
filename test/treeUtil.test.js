import { expect } from 'chai';
import { treeFromArray } from '../utils/treeUtil';

/**
              5
             / \
            4   8
           /   / \
          11  13  4
         /  \    / \
        7    2  5   1

*/
describe('treeUtil', () => {
    it('convert array to tree', () => {
        let root = treeFromArray([5,4,8,11,null,13,4,7,2,null,null,null,null,5,1]);
        expect(root.left.val).to.equal(4);
        expect(root.right.right.right.val).to.equal(1);
    })
})