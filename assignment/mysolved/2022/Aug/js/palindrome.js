function reverse(a){
let reversen;
reversen=((parseFloat(a.toString().split('').reverse().join(''))));
return reversen;
}
let number = 5000;
for(i=0;i<number;i++)
{
    n=reverse(i);
    if(i==n)
    {console.log(i)}
}

