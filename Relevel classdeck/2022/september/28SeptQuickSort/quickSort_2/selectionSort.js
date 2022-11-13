function selectionSort(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        for(let j=i+1;j<arr.length;j++)
        {if(arr[i]>arr[j])
            {
                let temp=arr[j];
                arr[j]=arr[i];
                arr[i]=temp;
            }

    }}
}
let arr=[3,2,3,1,2,4,5,5,6];
selectionSort(arr);
console.log(arr);