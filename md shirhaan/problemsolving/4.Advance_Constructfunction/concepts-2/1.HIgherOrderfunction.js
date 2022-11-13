/* HOF are the functions the functions that takes other functions as arguments or return functions as a result. 
Arrays function such as map, filter,sort,reduce,forEach and so on are Higher Order function because these functions accepts function as an argument and return desired output.
*/

/*Composability.

Function composition is a mechanism of combining multiple simple functions to build a more complicated one . The result of each function is passed to the next one.
eg=>
*/
const add=(a,b)=>a+b;
const mul=(a,b)=>a*b;
console.log(add(2,mul(3,5)));
//function taking another function as argument.