
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

function capitalizeColor(clothingColour){
    if (clothingColour.substring[1]=== clothingColour.substring[1].toUpperCase()){
        clothingColour = clothingColour.substring[1].toLowerCase();
        }
}
function capitalizeFood(lastFoodEaten){
        if (lastFoodEaten.substring[1]=== lastFoodEaten.substring[1].toUpperCase()){
            lastFoodEaten = lastFoodEaten.substring[1].toLowerCase();
        }
    }


console.log(generateBandName('ReD', 'carrots'));
console.log(generateBandName('Blue', 'cake'));
console.log(generateBandName('white', 'steak'),'\nUser Inputs:',arrClothingColor);