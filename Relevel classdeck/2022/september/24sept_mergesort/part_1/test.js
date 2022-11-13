function countInversion(arr,left,right)
{
 if(left===right)
 {
  return 0;
 }
  
    let mid=Math.floor((left+right)/2);
    let leftCount=countInversion(arr,left,mid);
    let rightCount=countInversion(arr,mid+1,right);
    return merge(arr,left,mid,mid+1,right)+leftCount+rightCount;
  
}
function merge(arr,s1,e1,s2,e2)
{
  let i=s1;
  let j=s2;
  let result=[];
  let count=0;
  while(i<=e1&&j<=e2)
  {
  if(arr[i]<arr[j])
   {
    result.push(arr[i]);
    i++;
   }
   else
   {
    result.push(arr[j]);
    count+=e1+1-i;
    j++;
   }
  }
  while(i<=e1)
  {
    result.push(arr[i]);
  i++;
  }
  while(j<=e2)
  {
    result.push(arr[j]);
    j++;
  }
  let l=0;
  for(let i=s1;i<=e2;i++)
  {
    arr[i]=result[l];
    l++;
  }
  return count;
}
let arr=[6,3,5,3,2,1];
console.log(countInversion(arr,0,5));
console.log(arr);