// YOUR CODE BELOW
let ticTacToe = {
    board: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ],
    move: function (val, rNum, cNum) {
        console.log(rNum, val)
        // this.board[rNum][cNum] = val
        if (this.board[rNum][cNum] === null) {
            this.board[rNum][cNum] = val
        }
        // if (this.board[cNum][rNum] !== null) {
        //     this.board[cNum][rNum] = val
        // }
        return this.board
    },
    clear: function () {
        let clearVal = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ]
        return (this.board = clearVal)
    },
}
