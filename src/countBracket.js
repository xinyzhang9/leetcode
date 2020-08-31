const count = function(num) {
    let count = 0
    let set = new Set()
    let res = []
    let tmp = []
    let visited = new Array(num * 2).fill(false)
    for(let i = 0; i < num; i++) {
        tmp.push('(')
        tmp.push(')')
    }

    backtrack(res, [], tmp, visited)
    for(let r of res) {
        if(isValid(r) && !set.has(hash(r))) {
            count++
        }
        set.add(hash(r))
    }
    return count
}

const backtrack = function(res, arr, tmp, visited) {
    if(arr.length === 2 * num) {
        res.push(arr.slice())
        return
    }
    for(let i = 0; i < tmp.length; i++) {
        if(visited[i]) continue
        if(i > 0 && tmp[i+1] === tmp[i] && !visited[i]) continue
        visited[i] = true
        arr.push(tmp[i])
        backtrack(res, arr, tmp, visited)
        visited[i] = false
        arr.pop()
    }
}

const isValid = function(arr) {
    if(!arr || arr.length < 1) return true
    const stack = []
    for(let i = 0; i < arr.length; i++) {
        if(stack.length === 0) {
            stack.push(arr[i])
        } else {
            let top = stack[stack.length-1]
            if(isPaired(top, arr[i])) {
                stack.pop()
            } else {
                stack.push(arr[i])
            }
        }
    }
    return stack.length === 0

}

const isPaired = function(a,b) {
    if(a === ')' && b === '(') return true
    return false
}

const hash = function(arr) {
    let res = 0
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === '(') {
            res += 10 * res + 2
        } else {
            res += 10 * res + 1
        }
    }
    return res
}


const num = 2
console.log(count(num))

// console.log(hash([ '(', '(', ')', ')' ]))
// ()(), (())