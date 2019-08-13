// 1. Var & console.log()
let firstName = 'Manuel';
let astName = 'Marhenke'; 

//2. Variable Info!
let name = firstName+" "+astName;
let city = 'Berlin';
let job = 'student';

//3. Concatenation
console.log(name,"is a 31 year old", job, "who lives in", city);

//4. Data Types
let length = 16.78; //number
let lastName = "Johnson"; //text string
let car = ""; //undefined  but it's a string
let isOpen = true;//boolean
console.log(typeof length);
console.log(typeof lastName);
console.log(typeof car);
console.log(typeof isOpen);

//5. Number Vars
let ageMark =30;
let ageJohn ="40";
console.log(typeof ageMark);
console.log(typeof ageJohn);

//6. Who's older?
let age = ageJohn>ageMark;
console.log(ageJohn>ageMark?"John is older than Mark:"+age :"Mark is older than John:"+age);

//7. Compare and contrast
let a = 1;
let b = 2;  
let c = 3; 
console.log(a===b);
console.log(b===c);
console.log(a===c);
console.log(c===a+b);
console.log(typeof (a===b));

//8. isFun?
let programmingLanguage = "JavaScript";
let isFun = true; 
console.log(programmingLanguage+" is fun: "+ isFun);

//9. What type is it? 
let test;
console.log(typeof test);
//type is undefined because no value assigned 

//10.  Calculation!
let calculation = (3+4/7)*10-13;
console.log(calculation);


