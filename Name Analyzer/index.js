//Name Analyzer
//Use string methods to complete the task!
const name = "          Franzi      Banger         ".trim();
const nameCountSpaces= name.replace(/\s/g, "");
const nameCount= nameCountSpaces.length;
const nameTrim = name.trim();
const nameArray = nameTrim.split(" ");
const nameArrayPosition = nameArray[0];
const nameFirstLetter = nameCountSpaces[0];
const nameLastLetter = nameCountSpaces[nameCountSpaces.length-1];
//const namePart = name.substring(nameCountSpaces0,nameCountSpaces.length[-3];
const nameEndingLetters = nameCountSpaces.substring(nameCountSpaces.length-3);
//const namePartEnd = nameEndingLetters.length;
const nameFunnyCount = nameCountSpaces.length - nameEndingLetters.length;
const nameMix = name.trim().substring(0,nameFunnyCount);
const funnyNames = "chmoo";
const nameChange = nameMix+funnyNames;
console.log(`Hello ${name.trim()}.
Your name is ${nameCount} letters long.
The first letter of your name is ,${nameFirstLetter} the last is ${nameLastLetter}.
If I wanted to be funny, I would call you ${nameChange}.`);
//console.log(nameArray);
console.log(nameArray[0]+ funnyNames);
