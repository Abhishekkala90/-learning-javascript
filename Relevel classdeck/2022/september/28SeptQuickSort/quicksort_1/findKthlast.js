function quickSort(arr,low,high)
{
if(low<high)
{
  pidx=partition(arr,low,high);
  quickSort(arr,low,pidx-1);
  quickSort(arr,pidx+1,high);
}
}
function partition(arr,low,high)
{
  let pivot=arr[low];
  let i=low;
  for(let j=low+1;j<=high;j++)
  {
    if(arr[j]<pivot)
    {
      i++;
      let temp=arr[j];
      arr[j]=arr[i];
      arr[i]=temp;
    }
  }
  i;
  let temp=arr[i];
    arr[i]=pivot;
    arr[low]=temp;
    return i;
}
function kthElement(arr,target)
{
quickSort(arr,0,arr.length-1);
return arr[arr.length-target];
}
let arr=[3,2,3,1,2,4,5,5,6];
console.log(kthElement(arr,9));