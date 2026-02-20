let array=[1,2,3,4,4];
let string="hello";
let object={name:"abhishek"};

console.log(array);
console.log(string);
console.log(object);
 let ans=array.find((el)=>el===3);
 console.log(ans);

 let valueCheck=object.hasOwnProperty('hello');
 console.log(valueCheck);

 let num1 ='manish';
 let newArray=array.fill(num1,1,4);
 console.log(newArray);

 let value=string.split('')
 console.log(value);

 let val=['abhi','shek','kumar'];
 let ans3=val.join('');
 console.log(ans3);

//  push
let arr1=[1,2];
arr1.push(3,'abhishek',5);

Array.prototype.dhakelo=function(value){
    let index=this.length;
    this[index]=value;
};

arr1.dhakelo(7);
console.log(arr1);

 
 

