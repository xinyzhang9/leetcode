export const nextPermutation = function(nums) {
    if(!nums || nums.length < 2) return
    let n = nums.length
    let i = n-2, j = n-1, k = n-1
    while(i >=0 && nums[i] >= nums[j]) {
        i--;
        j--;
    }

    // if it is not the last permutation
    if(i >=0) {
        while(nums[i] >= nums[k]) {
            k--
        }
        swap(nums, i, k)
    }
    reverse(nums, j, n-1)
};

var swap = function(nums, i, j) {
    let tmp = nums[i]
    nums[i] = nums[j]
    nums[j] = tmp
}

var reverse = function(nums, i, j) {
    let left = i
    let right = j
    while(left < right) {
        let tmp = nums[left]
        nums[left] = nums[right]
        nums[right] = tmp
        left++
        right--
    }
}