function myReverse(arr) {
    let myRev = []
    for (let k = arr.length - 1; k >= 0; k--) {
        myRev.push(arr[k])
    }
    return myRev
}

// console.log(myReverse([1, 2, 4, 5, 6, 73, 2]))
