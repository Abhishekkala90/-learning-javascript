function findInverse(arr,start,end)
{
    if(start===end)
    {
        return 0;
    }
    if(start<end)
    {
        let mid=Math.floor((start+end)/2);
        let left=findInverse(arr,start,mid);
        let right=findInverse(arr,mid+1,end);
        return merge(arr,start,mid,mid+1,end)+left+right;
    }
    function merge(arr,s1,e1,s2,e2)
    {
        let countInverse=0;
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
            countInverse+=e1+1-i;
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
       return countInverse;
    }
}
let arr=[3,2,3,1,2,4,5,5,6];
console.log(findInverse(arr,0,arr.length-1));
 
