
let arrBandName = [];

function generateBandName(clothingColour, lastFoodEaten) {
    const result = `The ${clothingColour} ${lastFoodEaten}!`;
    if (clothingColour[0] === clothingColour[0].toLowerCase() || lastFoodEaten[0] === lastFoodEaten[0].toLowerCase()){
        clothingColour = clothingColour[0].toUpperCase() + clothingColour.substring(1);      
        lastFoodEaten = lastFoodEaten[0].toUpperCase() + lastFoodEaten.substring(1);
        arrBandName.push([clothingColour, lastFoodEaten]);   
    }
    return result;
}

function capitalizeColor(clothingColour){
    if (clothingColour.substring[1]=== clothingColour.toUpperCase().substring[1]){
        clothingColour =  clothingColour[0] + clothingColour.toLowerCase().substring(1);
        const result = `The ${clothingColour}!`;
        return result;
        }
}
function capitalizeFood(lastFoodEaten){
    if (lastFoodEaten.substring[1]=== lastFoodEaten.toUpperCase().substring[1]){
        lastFoodEaten = lastFoodEaten[0] + lastFoodEaten.toLowerCase().substring(1); // R + edsffs[2] // Rs
        const result = `The ${lastFoodEaten}!`;
        return result;
    }
}


console.log(generateBandName('ReD', 'carrots'));
console.log(generateBandName('Blue', 'cake'));
console.log(generateBandName('white', 'steak'),'\nUser Inputs:',arrBandName);
console.log(capitalizeColor('ReDsFFs'));
console.log(capitalizeFood('POJSDlodlSS'));