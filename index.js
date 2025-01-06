// //Data types

// var data = "value";
// data = 1;
// data = true;
// data = [1, 2, 3];
// data = { key:1 };

// console.log(data);


// //string
// var itsString = "Hello there";
// console.log(typeof itsString);
// console.log(itsString.length);
// console.log(itsString.split("  "));
// console.log(itsString.trim());
// itsString = itsString.trim();
// console.log(itsString.length);
// console.log(itsString.charAt(0));
// console.log(itsString.lastIndexOf('l'));

// console.log("str"+"1");
// var newVar = 123;
// console.log(typeof ""+ newVar);
// console.log(typeof ${newVar})  // Template literals

// var newVar1 = `this
// is
// multi line
// string ${newVar}`;
// console.log(newVar1);

// //numbers
// var numHolder = 123.45;
// console.log(Number.parseInt(numHolder));
// var strHolder = "123";
// console.log(typeof Number.parseInt(strHolder));
// console.log(typeof + strHolder);


// //math
// var intValue = 123.1;
// console.log(Math.round(intValue));
// console.log(Math.ceil(intValue));
// console.log(Math.floor(intValue)); 
// console.log(Math.pow(2, 3));
// console.log(Math.sqrt(25));
// console.log(Math.max(1, 2, 3, 4, 5));
// console.log(Math.min(1, 2, 3, 4, 5));
// console.log(Math.random()*1000);
// console.log(Math.sqrt(25));
// console.log(Math.cbrt(27));


// //Boolean
// var boolValue = false;
// console.log(boolValue);
// console.log(typeof boolValue);

// //undefined
// var dataType;
// console.log(dataType);


// //null
// var nullValue = null;
// console.log(nullValue);

// //Array
// var arr = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr.length);
// console.log(arr.push(6));
// console.log(arr);
// console.log(arr.pop());
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.unshift(1);
// console.log(arr);

// var array = [1,"str",{obj:1}];
// console.log(array);

// //Activity - Reversing
// var dataVar = "Hello";
// dataVar = dataVar.split("");
// console.log(dataVar);
// dataVar = dataVar.reverse();
// console.log(dataVar);
// dataVar = dataVar.join("");
// console.log(dataVar);

// //for loop
// for(var i = 0; i < 5; i++){
//     console.log(i);
// }

// //while loop
// var i = 5;
// while(i > 0){
//     console.log(i);
//     i--;
// }

// //do while loop
// do{
//     console.log("Hello");
// }while(false);


// //higher order functions
// var data = ["apple","orange","pineapple","mango"].forEach
// (i=>
//     {
//         console.log(i);
//     }
// )
// console.log(data);

// //use variable to store the value of forEach
// //two foreach cannot be executed

// ["apple","orange","pineapple","mango"].forEach
// ((i,k)=>{
//     console.log(k,i);
// })


// //conditional statements

// //if else
// if(false){
//     console.log("True");
// }
// else{
//     console.log("False");
// }


// //if elseif ladder
// var i = 10;
// if(i==2)
// {
//     console.log("Equals to 2");
// }
// else if(i==3)
// {
//     console.log("Equals to 3");
// }
// else{
//     console.log("Equals to 10");
// }


// //Activity - Check vowel or consonant
// var vowel = "aeiouAEIOU";
// // var char = prompt("Enter a character"); getting the value from user
// var char = "a";
// var g = 0;
// for(var i = 0; i < vowel.length; i++){
//     if(vowel[i] == char){
//         console.log("Vowel");
//         g = 1;
//         break;
//     }
// }
// if(g == 0)
//     {
//         console.log("Consonant");
//     }

// //switch case

// //var character = prompt("Enter a character");
// // character = character??"b"; //nullish coalescing operator
// // if(character){
// // switch(character){
// //     case "a":
// //     case "e":  
// //     case "i":   
// //     case "o":    
// //     case "u":
// //         console.log("Vowel");
// //         break;
// //     default:
// //         console.log("Consonant");
// //         break;
// // }
// // }

// //ternary operator - var varname = condition?true:false;
// var sample = 1;
// console.log(sample == 1 ? "True" : "False");

// var samplevar = 'a';
// samplevar = samplevar=='a'?true:samplevar=='b'?true:false;
// console.log(samplevar);


// //functions - function name{} 
// function hello(){
//     console.log("Hello");
// }
// hello();

// console.log(eval(1+2-3+"7"))  //evaluates the expression using BODMAS rule


// function multiple(value,value1)
// {
//     return value*value1;
// }
// console.log(multiple(2,3));
// //use console.log to print the return's value from a function.


// //hoisting - function can be called before defining it


// var check = 10;
// var check = "string";  //can redeclare
// console.log(check);

// let check1 = 10;
// // let check1 = "string";  cannot redeclare    
// console.log(check1);

// const check2 = 24;
// //check2 = 25;  cannot reassign
// console.log(check2);



// //arrow functions
// const addValue = (v1,v2) =>
// {
//     console.log(v1+v2);
// }
// addValue(2,3);

// const addValue1 = (v1,v2) => v1+v2;
// console.log(addValue1(2,3));

// const addValue2 = (v1,v2) => {
//     return v1+v2
// };
// console.log(addValue2(2,3));

// //find sum of elements in an array
// //normal function
// const array1 = [1,2,3,4,5];
// var sum = 0;
// for(var i=0;i<array1.length;i++)
// {
//     sum += array1[i];
// }
// console.log(sum);

// //arrow function
// const AddElements = (array1) => 
// {
//     var sum = 0;
//     for(var i=0;i<array1.length;i++)
//     {
//         sum += array1[i];
//     }
//     return sum;
// }
// console.log(AddElements(array1));


// //map function - to perform operations on each element of an array
// //returns new array , does not modify the existing array
// let ar = [1,2,3,4,5];
// let compute = arr.map((i)=>i+1);
// console.log(compute); //new array
// console.log(ar); //original array remains same


// //filter function - to filter out elements from an array based on a condition
// let compute1 = arr.filter((i)=>i%2==0);
// console.log(compute1);
// var arr = [1,2,3,4,5]
// let compute2 = arr.filter((i)=>i%2!=0);
// console.log(compute2);
// let array = [1,2,3,4,5]
// let compute = Array.some(i=>i<5)
// console.log(compute);
// let array = [1,2,3,4,5]
// let compute = array.filter(i=>i<5)
// console.log(compute);

// let array = [1,2,3,4,5]
// let compute = array.some (i=>i<5)
// console.log(compute);

// let testObj={name:"john", age : 23}

// console.log(testObj.name);
//  destruturing 
// let {name,age}= testObj
// console.log(name,age);
let testObj={name:"john", age : 23}  
let {name:mo,age}=testObj
console.log(mo,age);


