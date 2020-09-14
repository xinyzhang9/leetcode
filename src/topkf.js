const topkf = (nums, k) => {
    const map = new Map(), heap = [,]
    nums.map(num => {
        if(map.has(num)) {
            map.set(num, map.get(num)+1)
        } else {
            map.set(num, 1)
        }
    })
    if(map.size <= k) return [...map.keys()]
    let i = 0
    map.forEach((val,key) => {
        if(i < k) {
            heap.push(key)
            if(i === k-1) buildHeap(heap, map, k)
        } else if(map.get(heap[1]) < val) {
            heap[1] = key
            heapify(heap, map, k, 1)
        }
        i++
    })
    heap.shift()
    return heap
}

const buildHeap = (heap, map, k) => {
    if(k === 1) return
    for(let i = Math.floor(k/2); i >=1; i--) {
        heapify(heap, map, k, i)
    }
}

const heapify = (heap, map, k, i) => {
    while(1) {
        let minIndex = i
        if(2 * i <= k && map.get(heap[2*i]) < map.get(heap[i])) {
            minIndex = 2 * i
        }
        if(2 * i + 1<= k && map.get(heap[2*i + 1]) < map.get(heap[minIndex])) {
            minIndex = 2 * i + 1
        }
        if(minIndex !== i) {
            swap(heap, i, minIndex)
            i = minIndex
        } else {
            break
        }
    }
}

const swap = (nums, i, j) => {
    let tmp = nums[i]
    nums[i] = nums[j]
    nums[j] = tmp
}

const nums = [1,1,1,2,2,3], k = 2
console.log(topkf(nums,k))