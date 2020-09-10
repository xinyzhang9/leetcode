export const preorderTraversal = function(root) {
    if(!root) return []
    const res = []
    const stack = [root]
    while(stack.length) {
        let cur = stack.pop()
        res.push(cur.val)
        if(cur.right) {
            stack.push(cur.right)
        }
        if(cur.left) {
            stack.push(cur.left)
        }
    }
    return res
};

export const postorderTraversal = function(root) {
    if(!root) return []
    const res = []
    const stack = [root]
    while(stack.length) {
        let cur = stack.pop()
        res.unshift(cur.val)
        if(cur.left) stack.push(cur.left)
        if(cur.right) stack.push(cur.right)
    }
    return res
};

export const inorderTraversal = function(root) {
    const res = []
    const stack = []
    let cur = root
    while(cur || stack.length) {
        while(cur) {
            stack.push(cur)
            cur = cur.left
        }
        cur = stack.pop()
        res.push(cur.val)
        cur = cur.right
    }
    return res
};
