function quickSort(arr,first,last)//reference apna college
{
    if(first<last)
    {
        let pivotIndex= findPivot(arr,first,last);
        quickSort(arr, first,pivotIndex-1);
        quickSort(arr,pivotIndex+1,last);
    }
    
}
function findPivot(arr,first,last)
{
    let pivot=arr[first];
    let i=last+1;
    for(let j=last;j<first;j--)
    {
if(arr[j]>pivot)
{
    i--;
    let temp;
    temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}
}
i--;
let temp;
temp=arr[i];
arr[i]=pivot;
arr[first]=temp;
return i;

}

let arr=[7,9,2,5,8,3,4];
quickSort(arr,0,arr.length-1);
console.log(arr);