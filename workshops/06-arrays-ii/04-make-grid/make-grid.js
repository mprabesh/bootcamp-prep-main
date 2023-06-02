// YOUR CODE BELOW
const makeGrid=(numC,numR)=>{
    let arr=[]
    for(let i=0;i<numR;i++){
        arr[i]=[]
        for(let k=0;k<numC;k++){
            arr[i][k]=k+1

        }
    }
    console.log(arr)
    return arr
}

makeGrid(6,4)