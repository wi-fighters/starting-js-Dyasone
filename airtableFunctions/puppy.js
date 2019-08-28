function calculateDogeAge(conversionRate, puppyHumanAge) {
    const sumOfRateAndPuppy = conversionRate*puppyHumanAge;
    return `"Your doggie is ${sumOfRateAndPuppy} years old in dog years!"`;
}
console.log(calculateDogeAge(7,8));
console.log(calculateDogeAge(2,3));
console.log(calculateDogeAge(4,5));

// the liftime supply calculator
function calculateSupply(age, amountDaily) {
    const oneYear = 365;
    const maxAge = 108;
    const supply = Math.round((maxAge - age)*(oneYear * amountDaily)); 
return `You will need ${supply} to last you until the ripe old age of ${maxAge}`;
}
console.log(calculateSupply(12,1.5));
console.log(calculateSupply(60,6.3));
console.log(calculateSupply(40,3.3));