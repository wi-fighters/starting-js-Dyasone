
let arrClothingColor = [];

function clothingColor(color, food) {
    const result = `The ${color} ${food}!`;
    if (color[0] === color[0].toLowerCase()) {
        color = color[0].toUpperCase() + color.substring(1);      
    }
    if (food[0] === food[0].toLowerCase()){
        food = food[0].toUpperCase() + food.substring(1);
        arrClothingColor.push([color, food]);   
    }
    return result;
}

console.log(clothingColor('ReD', 'carrots'));
console.log(clothingColor('Blue', 'cake'));
console.log(clothingColor('white', 'steak'),'\nUser Inputs:',arrClothingColor);