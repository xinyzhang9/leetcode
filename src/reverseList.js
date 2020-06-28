export const reverseList2 = function(head) {
    let prev = null;
    let curr = head;
    while(curr != null) {
        let tmp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = tmp;
    }
    return prev;
};

export const reverseList = function(head) {
    if(head === null || head.next === null) return head;
    let p = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return p;
}