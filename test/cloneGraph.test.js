import { cloneGraphDFS, cloneGraphBFS } from '../src/cloneGraph';
import { expect } from 'chai';
import { is2dArrayEqual } from '../utils/arrayUtils';
import { Node } from '../utils/graphUtil';
describe('clone graph', () => {
    it('makeGraphFromAdjList', () => {
        const graph = [[2,4],[1,3],[2,4],[1,3]]
        expect(makeGraphFromAdjList(graph).val).to.equal(1)
        expect(makeGraphFromAdjList(graph).neighbors[0].val).to.equal(2)
        expect(makeGraphFromAdjList(graph).neighbors[1].val).to.equal(4)
    })

    it('getAllAdjList', () => {
        const graph = [[2,4],[1,3],[2,4],[1,3]]
        let node = makeGraphFromAdjList(graph)
        expect(is2dArrayEqual(getAllAdjList(node), [[2,4],[1,3],[1,3],[2,4]])).to.be.true
    })

    it('dfs', () => {
        const graph = [[2,4],[1,3],[2,4],[1,3]]
        let node = makeGraphFromAdjList(graph)
        let clonedNode = cloneGraphDFS(node)
        expect(is2dArrayEqual(getAllAdjList(clonedNode), [[2,4],[1,3],[1,3],[2,4]])).to.be.true
    })

    it('bfs', () => {
        const graph = [[2,4],[1,3],[2,4],[1,3]]
        let node = makeGraphFromAdjList(graph)
        let clonedNode = cloneGraphBFS(node)
        expect(is2dArrayEqual(getAllAdjList(clonedNode), [[2,4],[1,3],[1,3],[2,4]])).to.be.true
    })
})

// nodes start from 1...2,3,4
function makeGraphFromAdjList(list) {
    let nodes = []
    for(let i = 0; i < list.length; i++) {
        nodes[i] = new Node(i+1, [])
    }

    for(let i = 0; i < list.length; i++) {
        for(let neighbor of list[i]) {
            nodes[i].neighbors.push(nodes[neighbor-1])
        }
    }
    return nodes[0]
}

// bfs, not in node value order
function getAllAdjList(node) {
    let res = []
    let visited = new Map()
    let queue = [node]
    visited.set(node, node.val)
    while(queue.length) {
        let cur = queue.shift()
        let list = []
        for(let neighbor of cur.neighbors) {
            if(!visited.get(neighbor)) {
                // prevent duplicate node added to the queue
                visited.set(neighbor, neighbor.val)
                queue.push(neighbor)
            }
            list.push(neighbor.val)
        }
        res.push(list.slice())
    }
    console.log(res)
    return res
}
