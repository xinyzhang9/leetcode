function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

export const treeFromArray = (arr) => {
    if(arr.length < 1) return null;
    let nodeArr = [];
    for(let i = 0; i < arr.length; i++) {
        nodeArr[i] = arr[i] === null ? null : new TreeNode(arr[i]);
    }
    for(let i = 0; 2 * i + 2 < arr.length; i++) {
        if(!nodeArr[i]) continue;
        nodeArr[i].left = nodeArr[2 * i + 1];
        nodeArr[i].right = nodeArr[2 * i + 2];
    }
    return nodeArr[0];
}