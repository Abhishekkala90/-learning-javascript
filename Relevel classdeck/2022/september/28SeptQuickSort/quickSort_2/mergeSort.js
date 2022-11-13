function findInverse(arr,start,end)
{
    if(start<end)
    {
        let mid=Math.floor((start+end)/2);
        findInverse(arr,start,mid);
        findInverse(arr,mid+1,end);
        merge(arr,start,mid,mid+1,end);
    }
    function merge(arr,s1,e1,s2,e2)
    {
        let i=s1;
        let j=s2;
        let result=[];
        while(i<=e1&&j<=e2)
        {
            if(arr[i]<arr[j])
        {    result.push(arr[i])
        i++}
        else{
            result.push(arr[j]);
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
        let k=0;
        for(let i=s1;i<=e2;i++)
        {
            arr[i]=result[k];
            k++;
        }
    }
}
let arr=[3,2,3,1,2,4,5,5,6];
findInverse(arr,0,arr.length-1);
 console.log(arr);
