export const wallsAndGates = function(rooms) {
    const EMPTY = 2147483647, GATE = 0
    if(!rooms || rooms.length < 1) return
    const dirs = [[-1,0],[1,0],[0,-1],[0,1]]
    const m = rooms.length, n = rooms[0].length
    const queue = []
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(rooms[i][j] === GATE) {
                queue.push(new Position(i,j))
            } 
        }
    }
    while(queue.length) {
        let cur = queue.shift()
        let x = cur.x, y = cur.y
        for(let dir of dirs) {
            let r = x+dir[0], c = y + dir[1]
            if(r < 0 || r > m-1 || c < 0 || c > n-1 || rooms[r][c] !== EMPTY) continue
            rooms[r][c] = rooms[x][y] +1
            queue.push(new Position(r,c))
        }
    }

};


var Position = function(x,y) {
    this.x = x
    this.y = y
}