function insertSort(arr)
{
    for(let i=1;i<arr.length;i++)
    {
        let temp=arr[i];
        let j=i-1;
while(j<=0 && arr[j]>temp)
        {
          
                let temp2;
                temp2=arr[j+1];
                arr[j+1]=arr[j];
                arr[j]=temp2;
         j--;
        }
    }
}
let arr=[25,37,22,24,26];
console.log(arr);
insertSort(arr);
console.log('After sorting the array is:',arr);