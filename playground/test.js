var combinationSum2 = function(candidates, target) {
    const dfs = function(target, path, index) {
        if(target === 0) {
            res.push(path.slice())
            return
        }
        for(let i = index; i < candidates.length; i++) {
            if(target-candidates[index] < 0) break
            if(i > index && candidates[i] === candidates[i-1]) continue
            path.push(candidates[i])
            console.log("递归之前 => " + path + "，剩余 = " + (target - candidates[i]));
            dfs(target-candidates[i],path,i+1)
            path.pop()
        }

        
    }
    if(!candidates || candidates.length < 1) return []
    candidates.sort((a,b) => a-b)
    console.log(candidates)
    const res = []
    dfs(target, [], 0)
    console.log(res)
    return res
};

let arr = [10,1,2,7,6,1,5]
combinationSum2(arr,8)