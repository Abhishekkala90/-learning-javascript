const a=
[
[2,14,15,16],
[7,98,20,22],
[8,21,23,24,],
[10,26,27,28]
];
//do it by yourselvesl
function findMax(a)
{
    let max=-Infinity;
    for(let i=0;i<a.length;i++)
    {
        for(let j=0;j<a[i].length;j++)
    {
        if(a[i][j]>max)
        {
            max=a[i][j];
         }
    }
    }
    return max;
}
console.log(findMax(a));