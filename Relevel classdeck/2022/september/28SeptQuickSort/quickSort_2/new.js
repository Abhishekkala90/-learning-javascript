function findInverse(arr)
{
    if(arr.length===1)
    {
        return arr;
    }
    let mid=Math.floor(arr.length/2);
    return merge(findInverse(arr.slice(0,mid)),findInverse(arr.slice(mid,arr.length)));
    function merge(left,right)
    {
        let i=0;j=0;
        let result=[];
        while(i<left.length && j<right.length)
        {
            if(left[i]<right[j])
            {
            result.push(left[i])
        i++;    
        }
        else
        {
            result.push(right[j])
            j++;     
        }
        }
        while(i<left.length)
        {
            result.push(left[i])
            i++;  
        }
        while(j<right.length)
        {
            result.push(right[j])
            j++;  
        }
        return result;
    }

}
let arr=[3,2,3,1,2,4,5,5,6];
console.log(findInverse(arr));