const A= [6 ,2, 3 ,1,3 ,4, 5] ,B= [5 ,3 ,3];
function intersection(a,b)
{
    a.sort((a,b)=>a-b);
    b.sort((a,b)=>a-b);
    let x=a.length;
    let y=b.length;
    let i=0;j=0;
    let result=[]
    while(i<x&&j<y)
    {
        if(a[i]==b[j])
        {
            result.push(a[i]);
        i++;j++;
        }
        if(a[i]>b[j])
        j++;
        if(a[i]<b[j])
        i++;    
    }
    return result;
}
console.log(intersection(A,B));