import { pathSum2 } from '../src/pathSum';
import { treeFromArray } from '../utils/treeUtil';
import { expect } from 'chai';

describe('path sum', () => {
    it('path sum ii', () => {
        let res = pathSum2(treeFromArray([5,4,8,11,null,13,4,7,2,null,null,null,null,5,1]),22)
        expect(res.length).not.to.equal(0)
    })
})