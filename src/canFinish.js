/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
export const canFinish = function(numCourses, prerequisites) {
    const indegree = new Array(numCourses).fill(0)
    const adjacency = []
    const queue = []
    for(let i = 0; i < numCourses; i++) {
        adjacency[i] = []
    }
    // get indegree and adjacent table
    for(let cp of prerequisites) {
        indegree[cp[0]]++
        adjacency[cp[1]].push(cp[0])
    }

    for(let i=0; i < numCourses; i++) {
        if( indegree[i]=== 0) queue.push(i)
    }

    while(queue.length) {
        let pre = queue.shift()
        numCourses--
        for(let cur of adjacency[pre]) {
            if(--indegree[cur] === 0) {
                queue.push(cur)
            }
        }
    }
    return numCourses === 0

};