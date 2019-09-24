let person = {
    firstName: 'Manuel',
    lastName: 'Marhenke',
    age: 31,
    city: 'Berlin',
    sum: () => {
        return 5+6;
    },
    welcome: () => {
        return `Hey ${person.firstName} you are the best ${person.city}`
    },
};
console.log(person.sum());
person.age = 32 ; 
console.log(person.age);
console.log(person.welcome());

let car = new Object();

car.color = 'Red';
car.name = 'Ford';
car.old = '40';
car.add = (x,y) => {
return x+y;
}

console.log(car.name);
console.log(car.add(2,3));
console.log(car['old']);