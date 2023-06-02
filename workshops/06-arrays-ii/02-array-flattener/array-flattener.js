// YOUR CODE BELOW
const arrayFlattener=(arr)=>{
    let final_arr=[]
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            for(let k=0;k<arr[i].length;k++){
                final_arr.push(arr[i][k])
            }
        }else{
            final_arr.push(arr[i])
        }

    }
    return final_arr;
}

arrayFlattener([1,[2, 3], 4])