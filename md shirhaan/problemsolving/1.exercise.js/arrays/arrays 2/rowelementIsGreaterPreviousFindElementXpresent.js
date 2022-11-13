//Given a 2D array where the value of any row element is greater than the previous.Our task is to find if element x is present in the array.

//find the element in an efficient manner.
let mat = [
    [2,14,15,16],
    [7,18,20,22],
    [8,21,23,24],
    [10,26,27,28]

    
];
function find(mat, x) {
    let rows = mat.length-1;
    let columns = mat[0].length-1;

    let i =0;//here we wrote i out side so that i has a outer access.
    for( ;i<=rows && mat[i][columns]<=x; i++)//here we are checking  rows wise means checking the rows last element.column show the last element of any row

    if(i<=rows) {
        let  j = columns;
        while(i<=rows && j>=0) {
            if(mat[i][j] == x) {
                return true;
            }
            if(mat[i][j] > x) {
                j--;
            } else {
                i++;
            }
        }
    }
    return false;
}

console.log("Shirhaan's approach",find(mat,18));//not giving result for  less then 16.

//2.Relevel's student approach.
let matrix = [
    [2,14,15,16,13],
    [7,18,20,22,78,100],
    [8,21,23,24,67,78,95],
    [10,26,27,]

    
];
const findx=(matrix,x)=>
{
    let row=matrix.length;
    for(let i=0;i<row;i++)
    {
        for(let j=0;j<matrix[i].length;j++)//matrix[i].length length for the  following row.
        {
            if(matrix[i][j]==x)
            {
                return 'found';
            }
        }
    }
    return 'not found';
};
let ans=findx(matrix,95);
console.log("Relevel's  student approach",ans);//working absolutely fine.working for matrix 2d array as well as non matrix.checking each and every element.

//3.Relevel's approach Best.

function search(A,x)
{
    let row=A.length;
    let col=A[0].length;
    let i=0;
    let j=col-1;
    while(i<row && j>=0)
    {
        if(A[i][j]==x)
        return true;//if current element is our target element-> print  output.
        else if(A[i][j]<x)
        i+=1;//if current element < target elemet-> increment the row
        else if(A[i][j]>x)
        j-=1;//If current element > target element->decrement the column
    }
    return false;
}

let A = 
[[2,14,15,16],
 [7,18,20,22],
 [8,21,23,24],
 [10,26,27,28]
];
let x=8;
console.log("Relevel's appraoch",search(A,x));

