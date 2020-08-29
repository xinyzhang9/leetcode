const getNextArray = (s) => {
    const next = new Array(s.length).fill(-1)
    let i = 0, j = -1
    while(i < s.length) {
        if(j === -1 || s[i] == s[j]) {
            ++i
            ++j
            next[i] = j
        } else {
            j = next[j]
        }
    }
    console.log(next)
    return next
}

const kmp = (s,p) => {
    let i = 0, j = 0
    const next = getNextArray(p)
    while(i < s.length && j < p.length) {
        if(j === -1 || s[i] === p[j]) {
            i++
            j++
        } else {
            j = next[j]
        }
    }
    if(j === p.length) return i-j
    return -1
}

getNextArray("abac#caba")
let ans = kmp("abcd","bc")
console.log(ans)