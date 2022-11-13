//Program to check if array is sorted.
//helper function recursion.
//shirhaan's logic. 
function ashok(arr)
{
    function helper (arr,i){
    if(i==arr.length)
    {
        return true;
    }
    if(arr[i]<arr[i+1])
    {
        return false;
    }
    return helper(arr,i+1);
    }
     return helper(arr,0);
}

const arr=[6,5,4,3,2];
console.log(ashok(arr));

// relevel's logic
function issorted(arr,i)
{
    if(i==arr.length-1)
    return true;
    let value = issorted(arr,i+1);
    return value && (arr[i]<=arr[i+1]);
}
console.log(issorted(arr,0));