//Pure function does not change the state of variables out of its scope and it will always return same output if we pass the same input multiple number of times.

let num=5;
//Pure Function.
const pureFunction=(num1,num2)=>{return num1+num2};

//Always returns same result given same inputs.
 
const result1=pureFunction(4,num);
console.log(result1);
//9
const result2=pureFunction(num,4);
console.log(result2);
//9