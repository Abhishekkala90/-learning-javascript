function transposing(matrix)
{
    let r=matrix.length;
    let c=matrix[0].length;
    let result=[];
    for(let i=0;i<r;i++)
    {
        result[i]=[]
    for(let j=0;j<c;j++)
    {
        result[i][j]=(matrix[j][i]);
    }
    console.log(result[i]);
}return result;
}

   matrix=[
    [1,2,3],
    [4,5,6], 
    [7,8,9]
   ];
transposing(matrix);
 