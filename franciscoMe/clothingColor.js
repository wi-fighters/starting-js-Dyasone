
let arrBandName = [];

// function generateBandName(clothingColour, lastFoodEaten) {
//     const result = `The ${clothingColour} ${lastFoodEaten}!`;
//     if (clothingColour[0] === clothingColour[0].toLowerCase() || lastFoodEaten[0] === lastFoodEaten[0].toLowerCase()){
//         clothingColour = clothingColour[0].toUpperCase() + clothingColour.substring(1);      
//         lastFoodEaten = lastFoodEaten[0].toUpperCase() + lastFoodEaten.substring(1);
//         arrBandName.push([clothingColour, lastFoodEaten]);   
//     }
//     return result;
// }
function resultFunc(clothingColour, lastFoodEaten) {
const capColor = function capitalizeColor(clothingColour) {
    if (clothingColour.substring[1] === clothingColour.toUpperCase().substring[1]){
        clothingColour =  clothingColour[0].toUpperCase() + clothingColour.toLowerCase().substring(1);
        //const result = `The ${clothingColour}!`;
        return clothingColour;
        }
}
const capFood = function capitalizeFood(lastFoodEaten) {
    if (lastFoodEaten.substring[1] === lastFoodEaten.toUpperCase().substring[1]){
        lastFoodEaten = lastFoodEaten[0].toUpperCase() + lastFoodEaten.toLowerCase().substring(1); // R + edsffs[2] // Rs
        //const result = `The ${lastFoodEaten}!`;
        return lastFoodEaten;
    }
}
arrBandName.push([clothingColour, lastFoodEaten]);
return `The ${capColor(clothingColour)} ${capFood(lastFoodEaten)}!\nUser Inputs:${arrBandName}`;
} 

// console.log(generateBandName('ReD', 'carrots'));
// console.log(generateBandName('Blue', 'cake'));
// console.log(generateBandName('white', 'steak'),'\nUser Inputs:',arrBandName);
console.log(resultFunc("askadh","JAHSd"));
//console.log(capFood('POJSDlodlSS'));