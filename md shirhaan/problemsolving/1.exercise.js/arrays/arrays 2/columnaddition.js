// let a=
// [
// [3,4,5],
// [3,4,2],
// [2,3,4],
// [4,4,4]
// ];
// function addcolumn(a)
// {
//     let r=a.length;
//     let c=a[0].length;
//     let result=[];
//     for(let i=0;i<c;i++)
//     {
//         result[i]=0;
//             for(let j=0;j<r;j++)
//         {
//             result[i]+=a[j][i];
//         }
//     }
//     return result;
// }

//  console.log(addcolumn(a));

// 2. by reduce method.


let nums = [
    [1,2,3],
    [4,5,6],
    [7,8,9]

    
];



let columnSum = nums.reduce((carry, row) =>{
    let result = [];
    for(let i = 0; i < carry.length; i++) {
        result[i] = carry[i] + row[i];
    }
    return result;
});
console.log('columnsum is equal:')
console.log(columnSum);


//sum of col using reduce and map.
let col_sum=nums.reduce((accumulated,row)=>accumulated.map((X,idx)=>X+row[idx]));//use pen and paper to understand.//idx is index of the array 1d.
console.log('columnsum  using reduce and map is equal:')
console.log(col_sum);
//Sum of rows.
let rowsum=[];
for(let i=0;i<nums.length;i++)
{
rowsum[i]=nums[i].reduce((accumulator,row)=>accumulator+row)}
console.log('Row sum is equal:')
console.log(rowsum);

//sum of row using reduce and map.
// let row_sum=nums.reduce((accumulated,row)=>accumulated.map((X,idx)=>X+row[idx]));//use pen and paper to understand.
// console.log('Rowsum  using reduce and map is equal:')
// console.log(row_sum);// we have to use loop here so this approach will be complex and longer better to not use methods here.