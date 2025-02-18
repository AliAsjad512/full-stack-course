
// Question # 1


// Write a JavaScript program to find maximum between two numbers using if else. 
// Javascript program to input two numbers from user and find maximum between 
// two numbers using if else. How to find maximum or minimum between 
// two numbers using if else in C programming.

let num1=10;
let num2=20;

if(num1> num2){
    console.log(num1+" is greater than "+num2);
}
else{
    console.log(num2+" is greater than "+num1);

}


//Question # 2
 
// JavaScript program to find maximum between three numbers using ladder if-else or nested if.
// How to find maximum or minimum between three numbers using if-else in JavaScript programming.
// Logic to find maximum or minimum between three numbers in JavaScript.

let a=10;
let b=20;
let c=30;
let maximum=0;

if(a> b && a> c){
    maximum=a;
}
else if(b> a && b> c){
    maximum=b;
}
else {
    maximum=c;
}

console.log(maximum);


// Question # 3 

// JavaScript program to check positive, negative or zero using simple if or if else.
// JavaScript program to input any number from user and check whether the given number is positive, negative or zero.
// Logic to check negative, positive or zero in JavaScript programming.

let num= -5;

if(a<0){
    console.log(num+" is negative")
}

else if(a>0){
    console.log(num+" is positive")
}
else{
    console.log(num+ " is zero");
}


//#4 Question

// JavaScript program to check whether a number is divisible by 5 and 11 or not using if else.
// How to check divisibility of any number in JavaScript programming.
// JavaScript program to enter any number and check whether it is divisible by 5 and 11 or not.
// Logic to check divisibility of a number in JavaScript program.



let div = 25;
if(div%5 && div% 11){
    console.log(div+ " divisible by 5 and 11");
}
else{
    console.log(div+ " is not divisible by 5 and 11");
}


//#5 Question

// JavaScript program to check whether a number is even or odd using if else.
// How to check whether a number is even or odd using if else in JavaScript program.
// JavaScript program to input a number from user and check whether the given number is even or odd.
// Logic to check even and odd number using if...else in JavaScript programming.


let evenOdd=20;
if(evenOdd%2==0){
    console.log(evenOdd+" is Even number");
}
else{
    console.log(evenOdd+" is odd number");
}


//Question # 6 year is leap or not


let year=2024;
if((year%4==0 && year%100==0) || year % 400 ==0){
    console.log(year+" is leap year");
}
else{
    console.log(year+" is not leap year");
}



//#7 Question character is aplhabet or not 

let ch='b';

if(ch>= 'a' && ch <= 'z' || (ch >= 'A' && ch <= 'Z')){
    console.log(ch+" is alphabet ");
}
else{
    console.log(ch+" is  not alphabet ");
}


//#8 Check vowel and constant





