// 1) Given an array having 0,1 as input. We need to write a function that sorts the array in ascending order without using inbuilt sort function
// Input Array -> [0,1,1,0,1,0,0,1]
// Output -> [0,0,0,0,1,1,1,1]
function sortArray(a)
{
    let count0=0;
    let count1=0;
    result=[];
    for(let i=0;i<a.length;i++)
{
    if(a[i]==0)
    count0++;
    else
    count1++;
}
for(let i=0;i<count0;i++)
result[i]=0;
for(let i=count0;i<count0+count1;i++)
result[i]=1;
return result;
}
let arr=[0,1,1,0,1,0,0,1];
console.log(sortArray(arr));


// 2) Given 2D Array. A Magic square is a 2D array having n rows and n columns which will be having all elements as distinct and the sum of row, column or diagonal is equal to the same number.
// You need to check whether that array is a magic square or not.
function isMagicSquare(mat)
{
    let N = mat.length;
    var sumd1 = 0,sumd2=0;
    for (let i = 0; i < N; i++)
    {
       sumd1 = sumd1 + mat[i][i];
        sumd2 = sumd2 + mat[i][N-1-i];
    }
     if(sumd1!=sumd2)
        return false;
 
     
    for (let i = 0; i < N; i++) {
        let colSum = 0;
        let rowSum = 0;   
        for (let j = 0; j < N; j++)
        {
            rowSum += mat[i][j];
            colSum += mat[j][i];
        }
        if (rowSum != colSum || colSum != sumd1)
            return false;
    }
    return true;
}
 
let mat = [[ 2, 7, 6 ],
           [ 9, 5, 1 ],
           [ 4, 3, 8 ]];
 
console.log(isMagicSquare(mat));