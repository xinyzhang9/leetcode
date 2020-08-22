export const convert = function(s, numRows) {
    if(!s || s.length < 1) return ""
    if(numRows === 1) return s
    const n = Math.min(s.length, numRows)
    const list = []
    for(let i = 0; i < n; i++) {
        list[i] = ""
    }
    let godown = false
    let curRow = 0
    for(let i = 0; i < s.length; i++) {
        list[curRow] += s[i]
        if(curRow === 0 || curRow === n-1) {
            godown = !godown
        }
        curRow = godown ? curRow + 1 : curRow - 1
    }
    
    let res = ""
    for(let i = 0; i < n; i++) {
        res +=list[i]
    }
    console.log(res)
    return res

};

