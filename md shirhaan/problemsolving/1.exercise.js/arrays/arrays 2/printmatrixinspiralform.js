//print array in spiral form.
//0=--->
//1=v
//2=<----
//3=^  
function spiral(matrix,row,column)
{
    let top=0;
    let down=row-1;
    let left=0;
    let right=column-1;
    let dir=0;
    let result=[];
    while(left<=right && top<=down){
     if(dir==0) //we are going left to right, top(row) is constant.
        {
            for(let i=left; i<=right;i++)
            {
                result.push(matrix[top][i]);
            }top++;
        }
     else if(dir==1)//we are going top to down,right(col)is constant.
    { 
       for(let i=top;i<=down;i++)
       {
        result.push(matrix[i][right])
       }        right--;
    }
else if(dir==2)//we are going right to left,down is constant(row).
{
for(let i=right; i>=left;i--)
{        
result.push(matrix[down][i]);
}
down--;
} 
else if(dir==3)//we are going down to top,left is constant(row).
{
for(let i=down; i>=top;i--)
{        
result.push(matrix[i][left]);
}left++;
}
dir=(dir+1)%4;//reset to 0 after 3.
}
result=result.join(' ');
console.log(result);
}


let matrix=

[
    [1,2,3],
    [5,6,7],
    [9,10,11],
    [13,14,15]
];
spiral(matrix,4,3);