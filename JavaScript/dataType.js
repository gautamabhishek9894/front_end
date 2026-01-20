// var name='abhishek';
// var surname='gautam';
// var maried='false';
// var age='22';
// var ans='${name} , ${surname}, ${maried},${age}';
// for(let i=0;i<3; i++){
//     console.log(i);
// }
// let val=3;
// val='gautam';
// console.log(val);




// Primitive -[call by value ] [call by memory]

// string  "" ''  ``
// Number  0-9
// boolean true/false
// symbol - symbol()
// undefined - undefined()
// null- null
// beInt- beInt


// Non-Primitive -[call by reference ] [call by address]

// array[]
// object{}
// funtion()

let name='abhishek';
name ='gautam';
name[0]='a';
console.log('name:', name);
console.log('name[0]:',name[0]);

let arr=[
    1,2,3,'abhishek','gautam',[true,false],{name:'abhishek'},];
   
    arr[0]='abhishek';
    arr[1]='gautam';

    console.log('arr[0]:',arr[0]);
    console.log('arr:',arr);
