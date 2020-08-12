import { Node } from '../utils/graphUtil';

export const cloneGraphDFS = function(node) {
    if(!node) return null
    let visited = new Map()
    return clone(node, visited)
};

var clone = function(node, visited) {
    if(visited.get(node)) return visited.get(node)
    let cur = new Node(node.val, [])
    visited.set(node, cur)
    for(let n of node.neighbors) {
        cur.neighbors.push(clone(n, visited))
    }
    return cur;
}

export const cloneGraphBFS = function(node) {
    if(!node) return null
    let queue = [node]
    let visited = new Map()
    visited.set(node, new Node(node.val, []))

    while(queue.length) {
        let cur = queue.shift()
        for(let neighbor of cur.neighbors) {
            if(!visited.get(neighbor)) {
                visited.set(neighbor, new Node(neighbor.val, []))
                queue.push(neighbor)
            }
            visited.get(cur).neighbors.push(visited.get(neighbor))
        }
    }

    return visited.get(node)
}
