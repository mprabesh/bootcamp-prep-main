// YOUR CODE BELOW
const maxOfThree=(num1,num2,num3)=>{
    if(num1>num3 && num1>num2){
        return num1
    }
    if(num2>num3 && num2>num1){
        return num2
    }
    return num3
}
