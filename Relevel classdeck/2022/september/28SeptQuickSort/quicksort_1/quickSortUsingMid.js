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
    let mid=Math.floor(arr.length/2);
  let pivot=arr[mid];
  let i=low-1;
  for(let j=low;j<=high;j++)
  {
    if(i===mid||j===mid)
    {
    continue;
    }
    if(arr[j]<pivot)
    {
      i++;
      let temp=arr[j];
      arr[j]=arr[i];
      arr[i]=temp;
    }
  }
if(i>=mid)
{
i++;
}
  let temp=arr[i];
    arr[i]=pivot;
    arr[mid]=temp;
    return i;
}
let arr=[7,9,2,5,8,3,4];
quickSort(arr,0,arr.length-1);
console.log(arr);