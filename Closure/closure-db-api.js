const init = () => {
    let db = [];
    let api = [];
    const create = (element) => {
        db.push(element); 
        console.log(`New element added! The new length of the array is ${db.length}`);
        return db.length;
    }; 
    const read = () => {
        return [...db];
    };
    const update = (index, newElement) => {
        const oldElement = db[index];
        if(typeof oldElement === 'undefined'){
           return create(newElement); 
         } else{
                return db.splice(index,1,newElement);
         }
    };
    const deleted = (index) => {
        const oldElement = db[index];
        if(typeof oldElement === 'undefined'){
            return console.log("no droids found");
        }else{
            return  db.splice(index,1);
        }
    };
    api.push(create);
    return [create,read,update,deleted]; 
}; 
const createInDb = init();
const createAPI = createInDb[0]; 
const readAPI = createInDb[1]; 
const updateAPI = createInDb[2]; 
const removeAPI = createInDb[3]; 


console.log(createAPI(234));
console.log(createAPI(878));
console.log(createAPI(345));
console.log(readAPI());
init(12); // can't change the db. no idea why it's not changing
updateAPI(20,122); 
updateAPI(7,88); 
updateAPI(10,4); // update working
updateAPI(1,122); 
updateAPI(0,500); // update working
//removeAPI(3);
console.log(readAPI());



