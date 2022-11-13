//M=rows,N=column.
const A=[
    [3,4,5],
    [3,4,2],
    [2,3,4],
    [4,4,4]
];
let m=A.length,n=A[0].length;
let col_sum=[];
//iterate through columns first.
for(let idx=0;idx<n;idx++)
{
    let sum=0;
    //iterate through rows
    for(let idx2=0;idx2<m;idx2++)
    {
        sum+=A[idx2][idx];//add values from the colulmn cells
    }
    col_sum.push(sum);
}
//printing the solutions.
console.log(col_sum);

//.2 using reduce function.
// A.reduce((m,n)=>{console.log(m)})

