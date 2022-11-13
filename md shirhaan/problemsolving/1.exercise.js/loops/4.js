function singledigitsum(n)
{let sum=0;
    while(true)
    {   
      sum=sumdigits(n) ;
      n=sum;
    if(sum<=9)
    break;
}
return n;
}
function sumdigits(n)
{
remainder=0;
sum=0;
while(n!=0)
{
    remainder=n%10;
    sum+=remainder;
    n=parseInt(n/10)

}
return sum;
}
console.log(singledigitsum(1000000));
console.log(sumdigits(999999989899899));