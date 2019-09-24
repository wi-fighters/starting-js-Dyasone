//const init = ()=> {
    
    let newObject = new Object();
    newObject.db = [];
    newObject.api = [];
    newObject.createdb = (newElement) => {
        newObject.db.push(newElement);
        console.log(`New element added! The new length of the array is ${db}`)
        return db.length;
    }
    newObject.read = () => {
        return [...newObject.db]
    }
    newObject.update = (index, newElement) => {
        newObject.update.oldElement = newObject.db[index];
        if (typeof update.oldElement === 'undefined') {
            newObject.create(newElement);
        }else{
            newElement.db[index] = newElement;
        }
        return newObject.update.oldElement;
    };
    newObject.remove = (index) => {
        newObject.remove.oldElement = newElement.newObject.db[index];
        if (typeof newObject.remove.oldElement === 'undefined') {
            return 'Error: could not update because there was no element at the specific index please try a diffrent index. THX';
        }
        newObject.db.splice(index,1);
        return newObject.remove.oldElement;
    };
    newObject.api.push(newObject.create,newObject.read,newObject.update,newObject.remove);
    return newObject.api;

newObject.dbApi = newObject;
const createInDb = newObject.createInDb();
const readDb = newObject.read();
const updateInDb = newObject.update();
const removeFromDb = newObject.remove(); 

console.log(`wow`)