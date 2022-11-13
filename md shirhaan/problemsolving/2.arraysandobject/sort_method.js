//sort function is used to sort the array based on the callback function condition and it should sort ascending order by default.
// What is a callback function?
//a function which is called like we called the function in map,reduce,filter,sort.etc.These are called callback function based methods.
let num=[4,12,1,45,36,16,700];
let numbers=[5,2,7,3,6,4,9,8,1];
console.log(num.sort((a,b)=>a-b) );//ascending order
let num2=[4,12,1,45,36,16,700];
console.log(num.sort((a,b)=>b-a) );//decending order
console.log(num);//it modifies the array.
console.log(numbers.sort());