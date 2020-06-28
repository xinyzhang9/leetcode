/**
 * 
 * 给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的排列。

换句话说，第一个字符串的排列之一是第二个字符串的子串。

示例1:

输入: s1 = "ab" s2 = "eidbaooo"
输出: True
解释: s2 包含 s1 的排列之一 ("ba").
 

示例2:

输入: s1= "ab" s2 = "eidboaoo"
输出: False
 

注意：

输入的字符串只包含小写字母
两个字符串的长度都在 [1, 10,000] 之间
 */
export const checkInclusion = function(s1, s2) {
    if(s1.length > s2.length) return false;
    const s1map = new Array(26).fill(0);
    for(let i = 0; i < s1.length; i++) {
        s1map[s1.charAt(i).charCodeAt()-'a'.charCodeAt()]++;
    }
    console.log(s1map)
    for(let i = 0; i <= s2.length - s1.length; i++) {
        const s2map = new Array(26).fill(0);
        for(let j = 0; j < s1.length; j++) {
            s2map[s2.charAt(i+j).charCodeAt()-'a'.charCodeAt()]++;
        }
        if(matches(s1map, s2map)) return true;
    }
    return false;
    
};

function matches(arr1, arr2) {
    for(let i = 0; i < 26; i++) {
        if(arr1[i] !== arr2[i]) return false;
    }
    return true;
}