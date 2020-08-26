export const letterCombinations = function(digits) {
    const res = []
    if(digits.length < 1) return []
    const keymap = {
        '2':['a','b','c'],
        '3':['d','e','f'],
        '4':['g','h','i'],
        '5':['j','k','l'],
        '6':['m','n','o'],
        '7':['p','q','r','s'],
        '8':['t','u','v'],
        '9':['w','x','y','z']
    }

    backtrack(res, keymap, digits, 0, [])
    return res
};

var backtrack = function(res, keymap, digits, index, path) {
    if(index === digits.length) {
        res.push(path.slice().join(''))
        return
    }
    let digit = digits[index]
    let arr = keymap[digit]
    for(let i = 0; i < arr.length; i++) {
        path.push(arr[i])
        backtrack(res,keymap,digits,index+1,path)
        path.pop()
    }
}