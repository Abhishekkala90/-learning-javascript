let a=[0,0,1,0,1,0,0,0,1,1,1,0,0,0,1];
let count0=0;
let count1=0;
let result=[];
for(let i=0;i<a.length;i++)
{
    if(a[i]==0)
    count0++;
}
count1=a.length-count0;
for(let i=0;i<=count0;i++)
{
result.push(0);
}
for(let i=0;i<=count1;i++)
{
result.push(1);
}
console.log(result);