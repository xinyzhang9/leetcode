/**
 * Definition for singly-linked list.
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}
export const reverseKGroup = (head, k) => {
    const dummy = new ListNode(-1);
    dummy.next = head;
    let pre = dummy;
    while(head) {
        let tail = pre;
        for(let i = 0; i < k; i++) {
            tail = tail.next;
            if(!tail) {
                return dummy.next;
            }
        }
        const next = tail.next;
        [head, tail] = reverseList(head, tail);
        pre.next = head;
        tail.next = next;
        pre = tail;
        head = tail.next;
    }
    return dummy.next;
};

var reverseList = function(head, tail) {
    let prev = null;
    let cur = head;
    while (prev !== tail) {
        const tmp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = tmp;
    }
    return [tail, head];
}

export const reverseKGroupRecursion = function(head, k) {
    if(!head) return null;
    let cur = head, prev = null;
    for(let i = 0; i < k-1; i++) {
        cur = cur.next;
        if(!cur) break;
    }
    if(!cur) return head;
    cur = head;
    for(let i = 0; i < k; i++) {
        let tmp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = tmp;
    }
    head.next = reverseKGroupRecursion(cur, k);
    return prev;
}