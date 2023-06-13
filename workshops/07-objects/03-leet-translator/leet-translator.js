let letters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
]
let leetChars = [
    '@',
    '8',
    '(',
    '|)',
    '3',
    'ph',
    'g',
    '#',
    'l',
    '_|',
    '|<',
    '1',
    "|'|'|",
    '//',
    '0',
    '|D',
    '(,)',
    '|2',
    '5',
    '+',
    '|_|',
    '|/',
    "|/|/'",
    '><',
    'j',
    '2',
]

// YOUR CODE BELOW
function leetTranslator(rawString) {
    let codeObj = {}
    let finalText = ''
    rawString = rawString.toLowerCase()
    for (let k = 0; k < letters.length; k++) {
        codeObj[letters[k]] = leetChars[k]
    }
    for (let i = 0; i < rawString.length; i++) {
        let temp = codeObj[rawString[i]]
        finalText = finalText + temp
    }
    // console.log(finalText)
    return finalText
}
leetTranslator('Fullstack')
