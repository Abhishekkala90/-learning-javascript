// Maps array method is use to modify every single element in an array to something else.
let digits=[10,20,30,40,50];//for eg i want to modify each no. and multiply it by 10.

// for(let i=0;i<digits.length;i++){
//     digits[i]*=10;
// }
// console.log(digits); //boring way

 let mul10=(num)=>num*10; //easy function using arrow function
console.log(digits.map(mul10)); //map is applying mul10 function on every element of the array digits.
//Not only call but we can also declare function inside of the map function also.
console.log(digits.map(num=>console.log('Hi '+num)));//no need to name function you can also.Map  is not use to print we can do that but it is not a good practice.for that purpose we use for loops.In this case it's also returning undefined because console.log is used.
console.log(digits.map(n=>n*10));//here it's returning value n*10
//array is a reference type so the map creates a new object it doesn't touch the original array.
//if you want to modify the existing array
digits=digits.map(n=>n*10);
console.log(digits);

  