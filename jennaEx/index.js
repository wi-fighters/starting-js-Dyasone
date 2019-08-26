let coffee = 1;
let daysBeforeExam = 10;
function jenna() {
    let name = "karma";
    console.log(`Schm${name}`);
    console.log(`${name}`); //still karma
    name = "wow"; 
    console.log(`${name}`);//only the latest value counts
    let coffee = 1;
    console.log(`${name} regulary drinks ${coffee} cups of coffee per day`);
    let daysBeforeExam = 10;
    console.log(`${name} drinks ${coffee} coups of coffee with ${daysBeforeExam} days before exam`);
    
    function exam(cups,days) {
        if (days > 0) {
            ++ cups;
        }
        if (days > 0){
            -- days;
            cups, days; 
        }
        console.log(`${name} drinks ${cups} coups of coffee with ${days} days before exam`);

    }
    exam(coffee, daysBeforeExam);
}
jenna();
