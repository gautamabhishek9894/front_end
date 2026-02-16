// check if number even or odd.

let num=9;
if(num%2==0){
    console.log("its a even number");
}
else{
    console.log("its a odd number");
}

// check if the number is positive, negative or zero.

let num1 =7;
if(num1>0){
    console.log("yes its a positive number");
}
else if(num1<0){
    console.log("yes its a negative number");
}
else{
    console.log("its a zero");
    
}
//  find the greater  between two numbers.

let num2=10;
let num3=20;
if(num2>num3){
    console.log(" num2 is greater than num3");
}
else{
    console.log("num3 is greater than num2");
}
//find the  largest among  the three numbers.

let a=10;
let b=15;
let c=20;
if(a>b && a>c){
    console.log("a is the largest number");
}
else if(b>a && b>c){
    console.log("b is the largest number");
}
else{
    console.log("c is the largest number");
}

// check the leap year or not.

let year=2025;

if(year%4==0 && year%100!=0 || year%400==0){
    console.log("its a leap year");
}
else{
    console.log("its not a leap year");
}

/*student score is  given, print the grade based on the 
 90-100->A, 
 80-89->B, 
 70-79->C,
 60-69->D,
  below 60->F. */

let score = 95;

if (score >= 90 && score <= 100) {
    console.log("Grade: A");
}
else if (score >= 80 && score <= 89) {
    console.log("Grade: B");
}
else if (score >= 70 && score <= 79) {
    console.log("Grade: C");
}
else if (score >= 60 && score <= 69) {
    console.log("Grade: D");
}
else {
    console.log("Grade: F");
}

/* Cotegorized the person by age:
0-12 ->child
13-19 ->teenagar
20-59 ->adult
60 above ->senior citizon.*/

let age = 25; 

if (age >= 0 && age <= 12) {
    console.log("Child");
} 
else if (age >= 13 && age <= 19) {
    console.log("Teenager");
} 
else if (age >= 20 && age <= 59) {
    console.log("Adult");
} 
else if (age >= 60) {
    console.log("Senior Citizen");
} 
else {
    console.log("Invalid age");
}

/* check the charecter os vowel or consonent. */

let ch = 's';   
if (
    ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u' ||
    ch === 'A' || ch === 'E' || ch === 'I' || ch === 'O' || ch === 'U'
) {
    console.log("Vowel");
} 
else {
    console.log("Consonant");
}

/*check if  the number is divisible by both 3 and 5. */

let num5 = 16;   

if (num5 % 3 === 0 && num5 % 5 === 0) {
    console.log("Number is divisible by both 3 and 5");
} 
else {
    console.log("Number is NOT divisible by both 3 and 5");
}

/*A temperature is given, print:
<=10 celcius ->cold
11-25 celcius ->moderate
>=25 celcius ->hot.*/

let temp = 5;

if (temp <= 10) {
    console.log("cold");
}
else if (temp >= 11 && temp <= 25) {
    console.log("pleasant");
}
else if (temp > 25) {
    console.log("hot");
}
else {
    console.log("Invalid temperature");
}
