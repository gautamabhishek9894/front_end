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

// Questions ///////////////////////////////////

// // const value=undefined;
// // switch(null){
// //     case true:
// //         console.log('yes');
// //         break;

// //         case false:
// //             console.log('no');
// //             break;

// //             default:
// //                 console.log('please select boolean value true / false');       
// // }

// // Function
// // let num1=+process.argv[2];
// // let num2=+process.argv[3];
// // let operators=process.argv[4];
// // function calc(num1, num2, opts) {
// //     switch (opts) {
// //         case '*':
// //             return num1 * num2;

// //         case '-':
// //             return num1 - num2;

// //         case '/':
// //             return num1 / num2;

// //         case '+':
// //             return num1 + num2;

// //         default:
// //             return null;
// //     }
// // }
// // const result=calc(num1,num2, operators);
// // if(result===null){
// //     console.log('please select correct operators!');
// // }       
// // else{
// //     console.log(Math.abs(result));
// // }

// // const addFunc=(A,B)=>{
// //     return A+B;
// // };
// // console.log(addFunc(num1,num2));


// // Switch  case

// // 1. Take a number (1–7). Print the day of the week.
// // switch (day) {
// //   case 1:
// //     console.log("Sunday");
// //     break;
// //   case 2:
// //     console.log("Monday");
// //     break;
// //   case 3:
// //     console.log("Tuesday");
// //     break;
// //   case 4:
// //     console.log("Wednesday");
// //     break;
// //   case 5:
// //     console.log("Thursday");
// //     break;
// //   case 6:
// //     console.log("Friday");
// //     break;
// //   case 7:
// //     console.log("Saturday");
// //     break;
// //   default:
// //     console.log("Invalid day number");
// // }

// // 2. Take a month number (1–12). Print the month name.
// let month=1;
// switch(month){
//     case 1:
//         console.log('january');
//         break;
//         case 2:
//         console.log('fabruary');
//         break;
//         case 3:
//         console.log('march');
//         break;
//         case 4:
//         console.log('april');
//         break;
//         case 5:
//         console.log('may');
//         break;
//         case 6:
//         console.log('june');
//         break;
//         case 7:
//         console.log('july');
//          break;
//          case 8:
//          console.log('august');
//          break;
//          case 9:
//          console.log('september');
//         break;
//         case 10:
//         console.log('october');
//         break;
//         case 11:
//          console.log('november');
//         break;
//         case 12:
//          console.log('december');
//         break;
//         default:
//         console.log('invalid month');
  
// }

// // 3. Input a number (1–4). Perform Addition, Subtraction, Multiplication, or Division.

// let calc = 1;
// let a = 10;
// let b = 5;

// switch (calc) {
//   case 1:
//     console.log(a + b);
//     break;
//   case 2:
//     console.log(a - b);
//     break;
//   case 3:
//     console.log(a * b);
//     break;
//   case 4:
//     console.log(a / b);
//     break;
//   default:
//     console.log("Invalid choice");
// }

// // 4. A user selects a drink: C → Coffee, T → Tea, J → Juice, W → Water.
// let drink='T';
// switch(drink){
//     case 'T':
//         console.log('cofee');
//         break;
//         case 'C':
//         console.log('tea');
//         break;
//         case 'j':
//        console.log('juice');
//        break;
//        case 'W':
//        console.log('water');
//        break;
//        default:
//        console.log("invalid drinks");      
// }

// // 5. Input a grade ('A', 'B', 'C', 'D', 'F'). Print a message like Excellent, Good, etc.
// let grade="A";
// switch(grade){
//     case"A":
//     console.log("Excellent");
//     break;
//     case"B":
//     console.log("Good");
//     break;
//     case"C":
//     console.log("Average");
//     break;
//     case"D":
//     console.log("Poor");
//     break;
//     case"F":
//     console.log("Fail");
//     break;
//     default:
//     console.log("invalid grade");
// }

// // 6. Input the first letter of a traffic light ('R', 'Y', 'G'). Print Stop, Ready, or Go.

// let signal = "R";

// switch (signal) {
//   case "R":
//     console.log("Stop");
//     break;
//   case "Y":
//     console.log("Ready");
//     break;
//   case "G":
//     console.log("Go");
//     break;
//   default:
//     console.log("Invalid signal");
// }

// // 7. Input a language code ('en', 'fr', 'es', 'de'). Display the language name.

// let lang = "en";

// switch (lang) {
//   case "en":
//     console.log("English");
//     break;
//   case "fr":
//     console.log("French");
//     break;
//   case "es":
//     console.log("Spanish");
//     break;
//   case "de":
//     console.log("German");
//     break;
//   default:
//     console.log("Language not supported");
// }

// // 7. Input a browser name (Chrome, Firefox, Edge, Safari). Show a launch message.

// let browser = "Chrome";

// switch (browser) {
//   case "Chrome":
//     console.log("Launching Chrome...");
//     break;
//   case "Firefox":
//     console.log("Launching Firefox...");
//     break;
//   case "Edge":
//     console.log("Launching Edge...");
//     break;
//   case "Safari":
//     console.log("Launching Safari...");
//     break;
//   default:
//     console.log("Browser not supported");
// }








