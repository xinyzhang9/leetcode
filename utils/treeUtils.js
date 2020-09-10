export const TreeNode = function(val) {
    this.val = val
    this.left = null
    this.right = null
}

export const makeSampleTree = function() {
    let root = new TreeNode(1)
    let left1 = new TreeNode(2)
    let right1 = new TreeNode(3)
    let left2 = new TreeNode(4)
    let right2 = new TreeNode(5)
    let right4 = new TreeNode(6)
    right1.right = right4
    left1.left = left2
    left1.right = right2
    root.left = left1
    root.right = right1
    console.log(root)
    return root
}