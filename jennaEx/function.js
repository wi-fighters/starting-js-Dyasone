const coffee = 1;
const name = "Jenna";
const dayToExam = 5;
function exam(cups,days) {
    if (days == dayToExam) {
        console.log(`${name} drinks ${cups} coups of coffee with ${days} days before exam`);
    }
    if (days > 1) {
        -- days; 
        ++ cups;
        console.log(`${name} drinks ${cups} coups of coffee with ${days} days before exam`);
        exam(cups, days);
        }    
    else {
        -- days; 
        ++ cups;
        console.log(`${name} drinks ${cups} coups of coffee on the day of the exam`);
    }   
    }     
    exam(coffee, dayToExam);
    