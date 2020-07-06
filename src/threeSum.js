/**
 * @param {number[]} nums
 * @return {number[][]}
 */
export const threeSum = function(nums) {
    const n = nums.length;
    if(n < 3) return [];
    let res = [];

    // must add comparator!
    nums.sort((a,b) => {
        if(a < b) return -1;
        if(a === b) return 0;
        return 1;
    });

    for(let first = 0; first < n; first++) {
        if(first > 0 && nums[first] === nums[first-1]) {
            continue;
        }
        let third = n-1;
        let target = -nums[first];
        for(let second = first+1; second < n; second++) {
            if(second > first+1 && nums[second] === nums[second-1]) {
                continue;
            }
            while(second < third && nums[second]+nums[third] > target) {
                third--;
            }
            if(second === third) {
                break;
            }
            if(nums[second]+nums[third] === target) {
                res.push([nums[first], nums[second], nums[third]]);
            }
        }
    }
    return res;
};