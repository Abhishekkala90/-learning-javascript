function bubbleSort(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        let flag=false;
        for(let j=0;j<arr.length;j++)
        { 
            if(arr[j+1]<arr[j])
            {flag=true;
                let temp=arr[j];
                 arr[j]=arr[j+1];
                 arr[j+1]=temp;
            }
        }
        if(!flag)
        break;
    }
}
let arr=[3,2,3,1,2,4,5,5,6];
bubbleSort(arr);
console.log(arr);