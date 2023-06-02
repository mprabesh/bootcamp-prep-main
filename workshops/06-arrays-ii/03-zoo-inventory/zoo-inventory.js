// YOUR CODE BELOW
const zooInventory=(arr)=>{
    let new_arr=[]
    for(let i=0;i<arr.length;i++){
    let animal=arr[i][0]
    let info=arr[i][1]
    let species=info[0]
    let val=info[1]
    let final=`${animal} the ${species} is ${val}.`
    new_arr.push(final)
    }
return new_arr;

}

