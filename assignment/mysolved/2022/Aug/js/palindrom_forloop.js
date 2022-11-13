// let n=567;
// while(n!=0)
// {
    //     remainder=n%10;
    //     reverse=reverse*10 +remainder;
    //     n=parseInt(n/10);
    // }
    // console.log(reverse);
    for(let i=0;i<=50;i++){
    let reverse=0;
    let remainder=0;
for(let n=i;n!=0;n=parseInt(n/10))
{
    remainder=n%10;
    reverse=reverse*10+remainder;
}//console.log(reverse);
if(i==reverse)
{
    console.log(i);
}
}