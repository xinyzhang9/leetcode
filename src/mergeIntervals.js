export const merge = function(intervals) {
    if(intervals.length < 1) return []
    let myIntervals = intervals.slice(0)
    myIntervals.sort((a,b) => {
        if(a[0] < b[0]) return -1
        return 1
    })

    let i = 0
    while(i+1 <= myIntervals.length-1) {
        if(myIntervals[i][1] >= myIntervals[i+1][0]) {
            myIntervals[i] = [myIntervals[i][0], Math.max(myIntervals[i+1][1], myIntervals[i][1])]
            myIntervals.splice(i+1, 1)
        } else {
            i++
        }
    }
    return myIntervals
};