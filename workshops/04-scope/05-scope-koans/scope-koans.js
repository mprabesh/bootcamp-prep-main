// Test One Restrictions: Do not declare any new variable with the let keyword
let testOneMessage = 'test failing'

function testOne() {
    let testOneMessage = 'test succeeding'
    return testOneMessage
}

// Test Two Restrictions: Do not change any code in the body of testTwo
// (you can edit helperFunc though)
let testTwoMessage = 'test failing'

function testTwo() {
    helperFunc()
    return testTwoMessage
}
function helperFunc(a) {
    testTwoMessage = 'test succeeding'
    return testTwoMessage
}
// console.log(testTwo())
// Test Three Restrictions: Type only a single character in either testThree or getMessage
let testThreeMessage = 'test failing'

function testThree(testThreeMessage) {
    if (testThreeMessage) {
        testThreeMessage = 'test succeeding'
    }

    let msg = getMessage()
    return msg

    function getMessage(value) {
        if (!value) {
            //prevent this block from executing to return test3Message
            return testThreeMessage
        }

        return 'test failing'
    }
}

// Test Four Restrictions: Delete only a single character from any function.
let testFourMessage = 'test succeeding'

function testFour(msg) {
    function innerFunc(msg) {
        msg = msg
        // console.log(msg)
        function doubleInner(ms) {
            //remove the character from parameter so it would not execute this block preventing to re-assign global variable
            testFourMessage = msg
            return testFourMessage
        }

        testFourMessage = doubleInner('test failing')
    }

    innerFunc(testFourMessage)

    msg = testFourMessage
    return testFourMessage
}
console.log(testFour('apple'))
