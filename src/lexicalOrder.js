export const lexicalOrder = function(n) {
    const res = []
    // start is a flag indicate the leftmost digit is [0-9] or [1-9]
    const dfs = function(num, start) {
        if(num > n) return
        // otherwise a 0 will be insert into res
        if(num > 0) {
            res.push(num)
        }
        for(let i = start > 0 ? 0 : 1; i<=9; i++) {
            dfs(num * 10 + i, start+1)
        }
    }
    dfs(0,0)
    return res
}
