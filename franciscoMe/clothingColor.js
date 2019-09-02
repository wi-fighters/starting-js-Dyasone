
let arrClothingColor = [];

function generateBandName(clothingColour, lastFoodEaten) {
    const result = `The ${clothingColour} ${lastFoodEaten}!`;
    if (clothingColour[0] === clothingColour[0].toLowerCase()) {
        clothingColour = clothingColour[0].toUpperCase() + clothingColour.substring(1);      
    }
    if (lastFoodEaten[0] === lastFoodEaten[0].toLowerCase()){
        lastFoodEaten = lastFoodEaten[0].toUpperCase() + lastFoodEaten.substring(1);
        arrgenerateBandName.push([clothingColour, lastFoodEaten]);   
    }
    return result;
}

console.log(generateBandName('ReD', 'carrots'));
console.log(generateBandName('Blue', 'cake'));
console.log(generateBandName('white', 'steak'),'\nUser Inputs:',arrClothingColor);