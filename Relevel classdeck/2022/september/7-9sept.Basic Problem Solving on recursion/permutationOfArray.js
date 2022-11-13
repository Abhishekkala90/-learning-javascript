function permu(nums,bag,result,freq)//since we are using loops so the time complexity will be more. As well the space complexity.
{
    if(bag.length==nums.length)
    {
        result.push([...bag]);
        return;
    }
    for(let i=0;i<nums.length;i++)
    {
        if(!freq[i])
        {
            freq[i]=true;
            bag.push(nums[i]);
            permu(nums,bag,result,freq);
            bag.pop();
            freq[i]=false;
        }
    }
return result;
}
nums=[1,2,3];
console.log(permu(nums,[],[],{}));
// bag is the  permutation.