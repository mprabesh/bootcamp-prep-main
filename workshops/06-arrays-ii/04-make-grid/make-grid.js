function makeGrid(numCols, numRows) {
    let final_2d_array = []
    for (let k = 0; k < numRows; k++) {
        let temp_array = []
        for (let i = 0; i < numCols; i++) {
            temp_array.push(i + 1)
        }
        final_2d_array.push(temp_array)
    }
    console.log(final_2d_array)
    return final_2d_array
}

makeGrid(3, 4)
