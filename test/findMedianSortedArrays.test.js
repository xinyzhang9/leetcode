import { expect } from 'chai';
import { findMedianSortedArrays } from '../src/findMedianSortedArrays';

describe('findMedianSortedArrays', () => {
    it('odd case', () => {
        const nums1 = [1,3], nums2 = [2];
        expect(findMedianSortedArrays(nums1, nums2)).equal(2);
    })

    it('even case', () => {
        const nums1 = [1,2], nums2 = [3,4];
        expect(findMedianSortedArrays(nums1, nums2)).equal(2.5);
    })
})