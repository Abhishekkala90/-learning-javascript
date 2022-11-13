//Swap using temp variable; Slowest
let a1=5;
let b1=8;
temp=a1;
a1=b1;
b1=temp;
console.log('Swap using temp variable a=5,b=8 Slowest');
console.log('a now:',a1);//now 8
console.log('b now:',b1);//now 5

//Swap without using temp variable; faster
let a2=15;
let b2=18;
a2=a2+b2;
b2=a2-b2;
a2=a2-b2;
console.log('Swap without using temp variable a=15,b=18 Faster');
console.log('a now:',a2);//18
console.log('b now:',b2);//15

//Xor operator:Fastest

let a=7;
let b=14;
 a=a^b;
 b=a^b;
 a=a^b;
console.log('Swap using Xor a=7,b=14 Fastest');

 console.log('a now:',a);//14
 console.log('b now:',b);//7


