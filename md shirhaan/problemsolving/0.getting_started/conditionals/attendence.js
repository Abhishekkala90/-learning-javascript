// 1.Without function
// let m =100;
// let n=74;
// if(n>=m*.75)
// {
//     console.log('0 (75% attendence already achieved)')
// }
// else{
//     console.log(m*.75-n);
// }
//2. Using Functions
function attendence(a,b)
{
    if(b>=Math.ceil(.75*a))
    {ans=0;
    return ans;}
    else{
        ans=Math.ceil(a*.75-b);
        return ans;
    }
}
let m=7;
let n=6;
console.log(attendence(m,n));
