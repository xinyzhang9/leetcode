/**给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。

请你找出这两个正序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

你可以假设 nums1 和 nums2 不会同时为空。

 

示例 1:

nums1 = [1, 3]
nums2 = [2]

则中位数是 2.0

示例 2:

nums1 = [1, 2]
nums2 = [3, 4]

则中位数是 (2 + 3)/2 = 2.5
*/

export const findMedianSortedArrays = (nums1, nums2) => {
    if(nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    const m = nums1.length;
    const n = nums2.length;
    let left = 0, right = m; // left <= i <= right in nums1
    const totalLeft = m + Math.floor((n-m+1)/2); // in nums1 and nums2: left part has (m+n+1)/2 elements (either equal or 1 more than right part)
    while(left < right) {
        let i = left + Math.floor((right-left+1)/2); // in nums1: left part has (m+n+1)/2 elements (either equal or 1 more than right part)
        let j = totalLeft - i;
        if(nums1[i-1] > nums2[j]) {
            right = i-1;
        } else {
            left = i;
        }
    }

    let i = left;
    let j = totalLeft - i;
    let nums1LeftMax = i === 0 ? Number.MIN_SAFE_INTEGER : nums1[i-1];
    let nums1RightMin = i === m ? Number.MAX_SAFE_INTEGER : nums1[i];
    let nums2LeftMax = j === 0 ? Number.MIN_SAFE_INTEGER : nums2[j-1];
    let nums2RightMin = j === n ? Number.MAX_SAFE_INTEGER : nums2[j];

    if((m + n) % 2 === 1) {
        return Math.max(nums1LeftMax, nums2LeftMax);
    } else {
        return (Math.max(nums1LeftMax, nums2LeftMax) + Math.min(nums1RightMin, nums2RightMin)) / 2;
    }

}