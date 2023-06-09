function removeColumns(originalGrid, numCols) {
    let final_2d_array = []
    for (let k = 0; k < originalGrid.length; k++) {
        let temp_array = []
        let element = originalGrid[k]
        for (let i = 0; i < element.length - numCols; i++) {
            temp_array.push(element[i])
        }
        final_2d_array.push(temp_array)
    }
    // console.log(final_2d_array)
    return final_2d_array
}

removeColumns(
    [
        [1, 2, 3],
        [1, 2, 3],
        [1, 2, 3],
        [1, 2, 3],
    ],
    2
)
