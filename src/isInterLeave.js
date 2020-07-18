export const isInterleave = function(s1, s2, s3) {
    const m = s1.length, n = s2.length
    if(m+n !== s3.length) return false
    const dp = new Array(m+1)
    for(let i = 0; i <= m; i++) {
        dp[i] = new Array(n+1).fill(false)
    }

    dp[0][0] = true
    for(let i = 1; i <=m; i++) {
        if(s3[i-1] === s1[i-1]) {
            dp[i][0] = true
        } else {
            break
        }
    }

    for(let j = 1; j <=n; j++) {
        if(s3[j-1] === s2[j-1]) {
            dp[0][j] = true
        } else {
            break
        }
    }

    for(let i = 1; i <=m; i++) {
        for(let j = 1; j <=n; j++) {
            dp[i][j] = (dp[i-1][j] && s3[i+j-1] === s1[i-1]) || (dp[i][j-1] && s3[i+j-1] === s2[j-1])
        }
    }
    return dp[m][n]
};