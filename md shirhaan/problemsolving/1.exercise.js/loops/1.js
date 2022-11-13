// Q.Given an array of number give positve and negative number separately.
let a=[1,-2,3,-5,7,-9,30,-23];
function findpositivenegative(arr){
let neg=[];
let pos=[];
for(let i=0;i<a.length;i++)
{
    if(a[i]<0)
    neg.push(a[i])
    else
    pos.push(a[i])
}
console.log(`Negative elements : ${neg.join(' ')}`);
console.log(`Positive elements : ${pos.join(' ')}`);
}//opposite to slit funcion(used on string) it  is used on array to join.
findpositivenegative(a);
