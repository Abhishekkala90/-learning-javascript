// foreach loop and map method do the same thing but map creates a new array while foreach loop doesn't create a new array it just iterates.
let nums=[1,2,3,
,5];
let animal=['cat','dog','horse','lion'];
//same as map
let sayHI=function(n){
    console.log('Hi '+n);
} 
console.log(nums.forEach(sayHI));//Here we get print.
function sayhello(n){
    return 'Hello '+n;
}
//difference between map and forEach.Map returns value whereas forEach doesn't return value.
let result=animal.map(sayhello);
let result1=animal.forEach(sayhello);
let result2=nums.forEach(sayHI);//It doesn't five any value as no array is created it only returns undefined.
console.log(result); //Here new modified array created.it returns the value.
console.log(result1);//Here output is undefined because for each doesn't return any value.
console.log(result2);//Here we got only unidentified.
console.log(animal.forEach(n=>console.log("Cute animal "+n)));//If i don't use console.log it will give only undefined cause forEach doesn't return anything.