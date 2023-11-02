const bubleSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                let tmp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = tmp
            }
        }
    }
    return array
}
const arr = []
for (let i = 0; i < 100000; i++) {
    arr.push(Math.floor(Math.random() * 100000))
}
console.log(bubleSort(arr))