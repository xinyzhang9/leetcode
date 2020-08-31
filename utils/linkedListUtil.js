export function ListNode(val) {
    this.val = val;
    this.next = null;
}

export function printList(head) {
    let res = [];
    while(head != null) {
        res.push(head.val);
        head = head.next;
    }
    return res;
}

export function makeList(arr) {
    let dummy = new ListNode(-1);
    let curr = dummy;
    for(let i = 0; i < arr.length; i++) {
         curr.next = new ListNode(arr[i]);
         curr = curr.next;
    }
    curr.next = null;
    return dummy.next;
}

export function compareList(arr1, arr2) {
    if(arr1.length != arr2.length) return false;
    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] !== arr2[i]) return false;
    }
    return true;
}