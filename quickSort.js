const QuickSort = (array) => {
    if (array.length <= 1) {
        return array
    }
    const less = []
    const bigger = []
    const middle = Math.floor(array.length / 2)
    const pivot = array[middle]
    for (let i = 0; i < array.length; i++) {
        if (array[i] === pivot) {
            continue
        }
        if (array[i] > pivot) {
            bigger.push(array[i])
        }
        if(array[i] < pivot) {
            less.push(array[i])
        }
    }
    return [...QuickSort(less),pivot,...QuickSort(bigger)]
}
const arr = []
for (let i = 0; i < 100000; i++) {
    arr.push(Math.floor(Math.random() * 100000))
}
console.log(QuickSort(arr))
