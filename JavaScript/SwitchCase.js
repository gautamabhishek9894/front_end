// const value=undefined;
// switch(null){
//     case true:
//         console.log('yes');
//         break;

//         case false:
//             console.log('no');
//             break;

//             default:
//                 console.log('please select boolean value true / false');       
// }

// Function
let num1=+process.argv[2];
let num2=+process.argv[3];
let operators=process.argv[4];
function calc(num1, num2, opts) {
    switch (opts) {
        case '*':
            return num1 * num2;

        case '-':
            return num1 - num2;

        case '/':
            return num1 / num2;

        case '+':
            return num1 + num2;

        default:
            return null;
    }
}
const result=calc(num1,num2, operators);
if(result===null){
    console.log('please select correct operators!');
}       
else{
    console.log(Math.abs(result));
}

const addFunc=(A,B)=>{
    return A+B;
};
console.log(addFunc(num1,num2));





