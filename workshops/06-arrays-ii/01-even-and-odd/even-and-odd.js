// YOUR CODE BELOW
const evenAndOdd=(arr)=>{
    let odd_arr=[]
    let even_arr=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2){
            even_arr.push(arr[i])
        }else{
            odd_arr.push(arr[i])
        }
    }
    return [odd_arr,even_arr]
}

//evenAndOdd([1,5,4,3,9,7,8])