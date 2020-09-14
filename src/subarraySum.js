const subarraySum = (nums, k) => {
    let count = 0
    const map = {0:1}
    let preSum = 0
    for(let i = 0; i < nums.length; i++) {
        preSum += nums[i]
        if(map[preSum-k] !== undefined) {
            count += map[preSum-k]
        }
        if(map[preSum] !== undefined) {
            map[preSum] += 1
        } else {
            map[preSum] = 1
        }
    }
    return count
}

const nums = [1,1,1], k = 2
console.log(subarraySum(nums, k))