function mergeSort(arr,left,right)
{    let invCount=0;
    let mid=Math.floor((left+right)/2);
    if(left<right)
    {
        invCount=+mergeSort(arr,left,mid);
        invCount=+mergeSort(arr,mid+1,right);
        invCount=+merge(arr,[],left,mid,right);
    }
    return invCount;
}
function merge(arr,temp,left,mid,right)
{
    let i,j,k;
   let  invCount=0;
    i=left;
    j=mid+1;
    k=left;
    while((i<=mid)&&j<=right)
    {
        if(arr[i]<=arr[j])
        {
            temp[k++]=arr[i++];
        }
        else{
            temp[k++]=arr[j++];
            invCount=invCount+(mid-i);
        }
    }
    while(i<mid)
    {
        temp[k++]=arr[i++];
    }
    while(j<right)
    {
        temp[k++]=arr[j++];
    }
    for(let i=left;i<=right;i++)
    {
        arr[i]=temp[i];
    }

    return invCount;
}
let arr=[9,8,7,6,5,4,3,2,1];
console.log(mergeSort(arr,0,8));