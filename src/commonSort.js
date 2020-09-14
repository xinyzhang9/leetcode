export const quickSort = (nums, l, r) => {
    if(l >= r) return
    let mid = partition(nums, l, r)
    quickSort(nums, l, mid-1)
    quickSort(nums, mid+1, r)
}

const partition = (nums, l, r) => {
    let pivot = nums[r]
    let i = l
    for(let j = l; j < r; j++) {
        if(nums[j] < pivot) {
            swap(nums, i, j)
            i++
        }
    }
    swap(nums, i, r)
    return i
}

const swap = (nums, i, j) => {
    let tmp = nums[i]
    nums[i] = nums[j]
    nums[j] = tmp
}
