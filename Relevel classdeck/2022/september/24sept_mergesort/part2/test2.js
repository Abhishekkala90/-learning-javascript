function max_min(arr)
{
    let max=-Infinity;
    let min=Infinity;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>max)
        max=arr[i];
        if(arr[i]<min)
        min=arr[i];
    }
    console.log('Maxm no is:',max);
    console.log('Minm no is:',min);

}

let arr=[8,4,6,7,1,2];
max_min(arr);