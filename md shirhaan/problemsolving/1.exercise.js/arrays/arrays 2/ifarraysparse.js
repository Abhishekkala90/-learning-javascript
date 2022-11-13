//Q A matrix is said to be a sparse matrix if half or more elements of the matrix are zeroes.
let a=[[1,0,15,0],[7,9,1,22],[0,0,0,1],[10,0,0,28]];
function checksparse(a)
{
    let count=0;
    let elements=0;
    for(let i=0;i<a.length;i++)
{
    for(let j=0;j<a[i].length;j++)
{elements++
    if(a[i][j]==0)
    count++;
}
}if(count>=elements/2)
console.log('Matrix is Sparse')
else
console.log('Matrix is not Sparse')

}
checksparse(a);