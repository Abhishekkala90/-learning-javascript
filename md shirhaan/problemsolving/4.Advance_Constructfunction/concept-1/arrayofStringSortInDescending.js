const arr=['a','b','c','z','h']
const arr2=[6,3,7,9,4,2,1,5]
console.log(arr2.sort((a,b)=>b-a));//this works for numbers only.
//In strings sort by default put them in acsending order.
console.log(arr.sort());//see
//But how to do it in descending.
console.log('z'.charCodeAt(0));//this method gives the code for each character.
//So simple now sorted.

console.log('Descending order of alphabet.',arr.sort((a,b)=>b.charCodeAt(0)-a.charCodeAt(0)));