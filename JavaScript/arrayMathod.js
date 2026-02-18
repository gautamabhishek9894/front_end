//   let arr=[1,2,3];
// arr.push(4,5,6);
// // arr.shift();
// arr.unshift();
// arr.pop();

//  this is thw slipce
// console.log(arr);
// let ans=arr.splice(0,1,2);
// console.log(ans);

// // this is the slice
// let ans1= arr.slice(3);
// console.log(arr);



// let new1=["abhishek", "shivam","suraj", "sneha"]
// let new2=new1.map((index, number, array)=>{
//     return new1.length;
//     console.log(new2);
    
// })
//   console.log(new2); 



  let new3=[4,4,4,36]
  let arr=new3.filter((el)=>el!=36)
  console.log(arr);

  // Questions ////////////////////////////


  // push
// Q1. Given an array [1,2,3], add 4 and 5 at the end.

let arrA = [1,2,3];
arr.push(4,5);
console.log(arrA);

// pop
// Q2. Remove the last element from [10,20,30].
let arr1 = [10,20,30];
let removed = arr1.pop();
console.log(arr1);
console.log(removed);


// shift
// Q4. Remove the first element from [5,6,7].
let arr3 = [5,6,7];
arr3.shift();
console.log(arr3);

// unshift
// Q5. Add 1 at the beginning of [2,3,4].
let arr4 = [2,3,4];
arr4.unshift(1);
console.log(arr4);

// splice
// Q6. Create an array of 5 numbers. Remove the second element using splice().
let number = [10, 20, 30, 40, 50];
number.splice(1,1);
console.log(number);

// splice
// Q7. Create an array of 4 fruit names. Add "Mango" at index 1 using splice().
let fruits = ["Apple", "Banana", "Orange", "Grapes"];
fruits.splice(1,0,"Mango");
console.log(fruits);

// slice
// Q8. Create an array of 6 numbers. Copy the first 3 elements using slice().
let arr5 = [1,2,3,4,5,6];
let firstThree = arr5.slice(0,3);
console.log(firstThree);
console.log(arr5);

// slice
// Q9. Create an array of 5 city names. Copy the last 2 elements using slice().
let cities = ["Delhi","Mumbai","Chennai","Kolkata","Pune"];
let lastTwo = cities.slice(-2);
console.log(lastTwo);
console.log(cities);

// map() //////////////////////////////////////////////////////////////////

// Q1. Given a list of integers, produce a new list where each number is squared.
let num = [1, 2, 3, 4];
let squared = num.map(num => num * num);
console.log(squared);


// Q2. Given a list of names, return a list of their lengths.
let names = ["John", "Anna", "Mike"];
let lengths = names.map(name => name.length);
console.log(lengths);

// Q3. Convert a list of temperatures in Celsius to Fahrenheit.
let celsius = [0, 10, 20, 30];
let fahrenheit = celsius.map(temp => (temp * 9/5) + 32);
console.log(fahrenheit);

// Q4. Given a list of words, return a list where each word is capitalized.
let word = ["apple", "banana", "mango"];
let capitalized = words.map(word => word.toUpperCase());
console.log(capitalized);

// Q5. Given a list of numbers, return a list of their absolute values.
let num1 = [-5, 3, -2, 8];
let absoluteValues = num1.map(num => Math.abs(num));
console.log(absoluteValues);

//filter(). ///////////////////////////////////////////////////////////

// Q1. From a list of integers, keep only the even numbers.
let numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

// Q2. From a list of numbers, keep only those greater than 50.
let nums = [20, 55, 70, 10, 90];
let greaterThan50 = nums.filter(num => num > 50);
console.log(greaterThan50);

// Q3. From a list of strings, keep only the strings longer than 5 characters.
let words = ["apple", "banana", "kiwi", "orange"];
let longWords = words.filter(word => word.length > 5);
console.log(longWords);

// Q4. From a list of numbers, keep only the positive numbers.
let values = [-10, 5, -3, 8, 0];
let positiveNumbers = values.filter(num => num > 0);
console.log(positiveNumbers);
  
