let nums=[12,4,5,6,7];
let dupNums=nums;
nums[0]=100;
console.log(nums[0]);
console.log(dupNums);//their reference is to  the same memory if change other the other automatically change.Unlike primitive datatypes.
// eg->
let animal='cat';

let animal2=animal;
animal='dog';
console.log(animal2);//because the 'cat' is copied to another separate memory. thats why when you change animal value it doesn't effect animal2.Unlike with arrays and object.

//only available with array not with object.
//It forms a new a Array.

// Arrow function '=>' another way to declare a function.it was introduced in 2015.

let add=(a,b)=>{
    return a+b;
}
console.log(add(8,7));
let sub= (a,b) => (a-b); //this is a function this is the main use of arrow function //this syntax is valid only for one line also it will automatically return the value whatever is written so don't need to return anything it will cause an error.
console.log(sub(8,6));
let sum100=num=>100+num;//if only one argument youcan use or not () its up to you by not making use of parenthesis you can write the function more small.

