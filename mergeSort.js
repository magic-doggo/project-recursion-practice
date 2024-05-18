function mergeSort(arr) {
    if (arr.length == 1) {
        return arr;  
    }
    let mid = Math.round(arr.length/2);
    let newArrayLeft = arr.slice(0, mid);
    let newArrayRight = arr.slice(mid);
    let sortedLeft = mergeSort(newArrayLeft);
    let sortedRight = mergeSort(newArrayRight);
    return merge(sortedLeft, sortedRight);

    function merge(left, right) {
        let sortedArray = []
        let m = 0; //current left index
        let n = 0; //current right index
        let k = left.length;
        let j = right.length;
        while (m < k && n < j) {
            if (left[m] < right[n]) {
                sortedArray.push(left[m]);
                m += 1;
            } else {
                sortedArray.push(right[n]);
                n += 1;
            }
        }
        for (m; m< k; m ++) {
            console.log("extra left " + left[m])
            sortedArray.push(left[m])
        }
        for (n; n<j; n++) {
            console.log("extra right " + right[n])
            sortedArray.push(right[n])
        }
    return sortedArray
    }
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])) // [0, 1, 1, 2, 3, 5, 8, 13]