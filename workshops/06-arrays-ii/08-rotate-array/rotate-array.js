function rotateArray(originalArr, rotateNum) {
    let new_arr = []
    let val
    if (rotateNum === 0) {
        return originalArr
    }
    if (rotateNum > 0) {
        val = originalArr.length - rotateNum
    }
    if (rotateNum < 0) {
        val = -rotateNum
    }
    for (let i = val; i < originalArr.length; i++) {
        new_arr.push(originalArr[i])
    }
    for (let k = 0; k < val; k++) {
        new_arr.push(originalArr[k])
    }

    return new_arr
}

rotateArray([1, 2, 3, 4, 5], -2)
