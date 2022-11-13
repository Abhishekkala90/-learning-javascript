let animals= ['cat','dog','rat'];
let fruits=['strawberry','mango','orange'];
let a2=[animals,fruits];//create a big array. It is a 2d array.
let nums=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
]
console.log(nums.forEach(nestedARR=>console.log(nestedARR)));//displaying each array element using for each.
// by loops
for(let i=0;i<=nums.length-1;i++)
{
    console.log(nums[i]);
}
// for printing all elements of array.
console.log(nums.forEach(arr=>{//for each is a array method.
    for(let num of arr){
        console.log(num);//use of 'for of' loop.
    }
}))