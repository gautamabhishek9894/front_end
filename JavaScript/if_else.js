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

// stufent score is  given, print the grade based on the 90-100->A, 80-89->B, 70-79->C, 60-69->D, below 60->F.

let score = 85;

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

