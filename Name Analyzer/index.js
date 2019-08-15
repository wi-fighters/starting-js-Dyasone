//Name Analyzer
//Use string methods to complete the task!
const name = "Fran lalala ";
const nameCountSpaces= name.replace(/\s/g, "");
const nameCount= nameCountSpaces.length;
const nameFirstLetter = name[0];
const nameLastLetter = nameCountSpaces[nameCountSpaces.length-1];
//const namePart = name.substring(nameCountSpaces0,nameCountSpaces.length[-3];
const nameEndingLetters = nameCountSpaces.substring(nameCountSpaces.length-3);
const funnyNames = "chmoo";
const nameChange = nameEndingLetters+funnyNames;
console.log(`Hello ${name.trim()}.
Your name is ${nameCount} letters long.
The first letter of your name is ,${nameFirstLetter} the last is ${nameLastLetter}.
If I wanted to be funny, I would call you ${nameChange}.`);