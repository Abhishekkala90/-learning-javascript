const arr=[6,5,4,2,3];
console.log(ashok(arr,0));
function ashok(a,i)
{
    if(i==a.length-1)
    return true;
    if(a[i]>a[i+1])
    return ashok(a,i+1)
    else
    return false;
}