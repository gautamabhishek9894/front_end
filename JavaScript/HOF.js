let arr=['mango','kiwi', 'banana','apple','orange','banana','banana'];
for(i=0;i<arr.length;i++){
    console.log(arr[i]);
}

for( let key of arr){
  console.log(key);
}








/* ternary operator

 condition ? true :false
 */
let ans=arr.map((Element, indexe,array)=>{
    return element=='banana'
    ?[true,index,array[index]]
    :[false, index,array[index]];

    // if(element=='banana'){
    //     return[true,index];
        
    // }else{
    //     return[false,index];
    // }
});

console.log(ans);

/* Map filter and Reduce */
let ansFilter=arr.filter((el,i,array)=>{
        return el !=='banana';
        console.log(el,i,array);
        
    });
    console.log(ansFilter);

     let ansReduce=arr.reduce((obj,currValue)=>{
        // console.log(obj,currValue);
        // return obj;
        obj[currValue]=(obj[currValue]|| 0)+1;   
     });

     console.log(ansReduce);
     