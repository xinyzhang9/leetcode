const sortBydict = function(nums) {
    const n = nums.length
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n-i-1; j++) {
            if(nums[j].toString() > nums[j+1].toString()) {
                let tmp = nums[j]
                nums[j] = nums[j+1]
                nums[j+1] = tmp
            }
        }
    }
}


const nums = [1,2,3,10]
sortBydict(nums)
console.log(nums)