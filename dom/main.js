// var url = require('url');
// var adr = 'http://localhost:8080/default.htm?year=2021&month=september';
// var q = url.parse(adr,true);

// console.log(q.host); //returns 'localhost:8080'
// console.log(q.pathname); //returns '/default.htm'
// console.log(q.search); //returns '?year=2021&month=september'

// //;returns an object: { year: 2021, month: 'september' }
// var qdata = q.query; 
// //returns 'september'
// console.log(qdata.month)
// console.log(qdata.year)

// how to print a to z alpha 
// for(let i=65; i<=90;i++){
//     console.log(String.fromCharCode(i));
// }

// how to print alphabet pattern 
let input = require('readline-sync');
// let rang = input.questionInt('enter your range =>'); // a             // a
// let str = "";                                        // a b           // b b
// for (let i = 1;i<=rang;i++){                         // a b c         // c c c
//     for(let j=0;j<i;j++){                            // a b c d       // d d d d
//         str +=String.fromCharCode(j+65);
//         // str +=String.fromCharCode(i+64); 
//     }
//     str+='\n';
// } 
// console.log(str);

// let rang = input.questionInt('enter your range =>');          // a
// let str = "";                                                 // b c
// let count = 0;                                                // d e f
// for(let i=1; i<rang;i++){                                     // g h i j
//     for(let j=0;j<i;j++){
//         str += String.fromCharCode(count+65)
//         count++
//     }
//     str +="\n"
// }
// console.log(str);

// let rang = input.questionInt('enter your range =>');          // a b c d
// let str = "";                                                 // a b c
// for(let i=1;i<=rang;i++){                                     // a b
//     for(let j=0;j<rang-i+1;j++){                              // a
//         str+=String.fromCharCode(j+65)
//     };
//     str+='\n'
// }  
// console.log(str);

// let rang = input.questionInt('enter your range =>');          // a b c d
// let str = ""; 
// for(let i=1;i<=rang;i++){
//     for(let j=0;j<rang-i+1;j++){
//         str+=String.fromCharCode((rang-1-j)+65);
//     }
//     str+='\n'
// }
// console.log(str);

var num = 10;
var dis = function(){
    console.log(num);
    var num = 20;
}
dis()

