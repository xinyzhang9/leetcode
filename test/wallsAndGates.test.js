import { wallsAndGates } from '../src/wallsAndGates';
import { expect } from 'chai';
import { is2dArrayEqual } from '../utils/arrayUtils';

describe('Walls and Gates', () => {
    it('should work', () => {
        const rooms = [[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]]
        wallsAndGates(rooms)
        expect(is2dArrayEqual(rooms, [[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]])).to.be.true
    })
})