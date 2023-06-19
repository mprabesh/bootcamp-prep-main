// YOUR CODE BELOW
function cacheSavings(myCallback) {
    let cacheVal = 0
    let cach
    return function myReturnFunc(arg) {
        if (arg === cacheVal) {
            //check if already present in cache
            return cach
        } else {
            cacheVal = arg
            cach = myCallback(arg) //invoke if not present
            return cach
        }
    }
}
//store arg in cache val and check for its value
