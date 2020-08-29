export const shortestPalindrome = function(s) {
    let rs = s.split('').reverse().join('')
    let news = s + '#' + rs
    const next = getNext(news)
    const maxLen = next[news.length-1]
    return s.substr(maxLen+1).split('').reverse().join('')+s
}

const getNext = (s) => {
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
    return next
}