// write a program demonstrating break and continue functionality.
let num=0;
for(let i=0;i<9;i++)//break example
{
console.log('i is equal to :'+i);
if(i==5)
break;
}
for(let j=0;j<9;j++)//break example
{
    if(j==5)
    continue;
    console.log('j is equal to :'+j);
}
