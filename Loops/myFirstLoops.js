let stitches = ''; // '-|'

for (let i = 0; i < 3; i += 1) {
    
    for (let j = 0; j < 3; j += 1) {
        switch (true) {
            case (stitches === ''):
                stitches += '-';
                break;
            case (j < 2 && stitches.slice(-1)[0] === "-"): // true
                stitches += "|";
                break;
            case (stitches.length === 4):
                stitches = stitches.slice(-1);
                console.log(stitches);
                break;
        }
    }

    console.log(stitches);
}

// let str = '';


// for(let i=0; i<=4;i++){
//     if(i%2==0){
//         str += '-';
//     }
//     if(str.length == 4){
//     KStr = str.slice(-1);    
//     }else{
//         str +='|';
//     }
// }
// console.log(str);