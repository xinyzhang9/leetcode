export const pathSum2 = function(root, sum) {
    if(!root) return [];
    const res = [];
    const path = [];
    dfs(root, sum, path, res);
    console.log(res);
    return res;
};

function dfs(root, sum, path, res) {
    if(!root) return;
    sum -= root.val;
    path.push(root.val);
    if(sum === 0 && !root.left && !root.right) {
        res.push(path.slice(0));
        // must remove last path element before return
        path.pop();
        return;
    }
    dfs(root.left, sum, path, res);
    dfs(root.right, sum, path, res);
    // must remove last path element before return
    path.pop();
}
