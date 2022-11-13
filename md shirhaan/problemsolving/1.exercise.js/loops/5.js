//Q.Convert smaller  case alphabets to uppercase.

// function toUppercase(str){
//     const upcase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     const lowcase='abcdefghijklmnopqrsruvwxyz';
//    let newstr='';
//    str.split('').map(item=>{
//     let index = lowcase.indexOf(item);
//     if(index>=0){
//         newstr+=upcase[index];
//     }
//     else{
//         newstr+=item;
//     }
//    })
//    console.log(str);
// }

// toUppercase('relevel');

// better aproach in terms of time complexicity.
const toupcase=(str)=>{
    let result='';
let alpha = {
    a: 'A',
    b: 'B',
    c: 'C',
    d: 'D',
    e: 'E',
    f: 'F',
    g: 'G',
    h: 'H',
    i: 'I',
    j: 'J',
    k: 'K',
    l: 'L',
    m: 'M',
    n: 'N',
    o: 'O',
    p: 'P',
    q: 'Q',
    r: 'R',
    s: 'S',
    t: 'T',
    u: 'U',
    v: 'V',
    w: 'W',
    x: 'X',
    y: 'Y',
    z: 'Z'
}
result=str.split('').map(item=>alpha[item]).join("");
console.log(result);
}
let str='hellorelevel';
str.toupcase();