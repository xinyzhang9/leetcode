const twosum = (nums, target) => {
    const res = []
    let l = 0, r = nums.length-1
    while(l < r) {
        if(nums[l] + nums[r] === target) {
            res.push([nums[l], nums[r]])
            l++
            r--
        }else if(nums[l] + nums[r] < target) {
            l++
        } else {
            r--
        }
    }
    return res
}

const arr = [1,2,4,5,6,7]
console.log(twosum(arr,9))

const allsum = (nums, target) => {
    const dfs = (target, path, index) => {
        if(target === 0) {
            res.push(path.slice())
            return
        }
        if(index > nums.length-1) return
        for(let i = index; i < nums.length; i++) {
            if(target-nums[i] >= 0) {
                path.push(nums[i])
                dfs(target-nums[i], path, i+1)
                path.pop()
            }
        }
    }
    const res = []
    dfs(target,[],0)
    return res
}

const arr2 = [1,2,4,5,6,7]
console.log(allsum(arr2,9))