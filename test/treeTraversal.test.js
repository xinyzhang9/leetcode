import { preorderTraversal, postorderTraversal, inorderTraversal } from '../src/treeTraversal';
import { expect } from 'chai';
import { makeSampleTree } from '../utils/treeUtils'
import { isArrayEqual } from '../utils/arrayUtils'
describe('tree traversal', () => {
    it('preorder', () => {
        let root = makeSampleTree()
        expect(isArrayEqual(preorderTraversal(root), [1,2,4,5,3,6])).to.be.true
    })

    it('inorder', () => {
        let root = makeSampleTree()
        expect(isArrayEqual(inorderTraversal(root), [4,2,5,1,3,6])).to.be.true
    })

    it('postorder', () => {
        let root = makeSampleTree()
        expect(isArrayEqual(postorderTraversal(root), [4,5,2,6,3,1])).to.be.true
    })
})