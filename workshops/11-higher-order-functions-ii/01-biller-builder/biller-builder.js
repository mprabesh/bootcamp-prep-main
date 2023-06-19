// YOUR CODE BELOW
function billerBuilder(state) {
    if (state === 'NY') {
        return function (price) {
            return price * 1.03 * 1.04
        }
    }
    if (state === 'NJ') {
        return function (price) {
            return price * 1.05 * 1.06625
        }
    }
}
