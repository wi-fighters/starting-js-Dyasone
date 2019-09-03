
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
    const rawString = function capitalizeColor(clothingColour) {
        if (clothingColour.substring[1] === clothingColour.toUpperCase().substring[1]){
            clothingColour =  clothingColour[0].toUpperCase() + clothingColour.toLowerCase().substring(1);
            return clothingColour;
        }
    }
    rawString(lastFoodEaten);
    arrBandName.push([clothingColour, lastFoodEaten]);
    return `The ${rawString(clothingColour)} ${rawString(lastFoodEaten)}!\nUser Inputs:${arrBandName}`;
} 

// console.log(generateBandName('ReD', 'carrots'));
// console.log(generateBandName('Blue', 'cake'));
// console.log(generateBandName('white', 'steak'),'\nUser Inputs:',arrBandName);
console.log(resultFunc("askadh","JAHSd"));
//console.log(capFood('POJSDlodlSS'));