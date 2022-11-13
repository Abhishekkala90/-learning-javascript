function findX(mat,x)
{
    row=mat.length;
    column=mat[0].length;
    i=0;
    j=column-1;
    while(i<row&& j>=0)
    {
        if(mat[i][j]==x)
        return ' Found';
        else if(mat[i][j]<x)
        i++;
        else if(mat[i][j]>x)
        j--;
    }
    return ' Not found';
}
let arr = 
[[2,14,15,16],
 [7,18,20,22],
 [8,21,23,24],
 [10,26,27,28]
];
let n=8;
console.log(findX(arr,n));