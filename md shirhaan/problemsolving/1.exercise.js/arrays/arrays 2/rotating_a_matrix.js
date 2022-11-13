//rotating a matrix to clockwise direction.
function rotate(m)
{
let row=m.length;
let column=m[0].length;
let result=[];
let r=0;
let c=0;
for(let j=0;j<column;j++)
{
result[r]=[];
c=0;
for(let i=row-1;i>=0;i--){
result[r][c]=m[i][j];
c++;
}
console.log(result[r]);
r++;
}
}
let m=[
    [1,2,4],
    [3,4,5],
    [6,7,7]
];

rotate(m);