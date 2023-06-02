//YOUR CODE BELOW
const myMnemonic=(firstWord,secondWord,thirdWord,fourthWord)=>{
    let finalString='';
    if(firstWord !== undefined){
        finalString += firstWord[0]
    }
    console.log(finalString)
    if(secondWord !== undefined){
        finalString += secondWord[0]
    }
    if(thirdWord !== undefined){
        finalString += thirdWord[0]
    }
    if(fourthWord !== undefined){
        finalString += fourthWord[0]
    }

    return finalString
}

myMnemonic('apple','orange','mango')

