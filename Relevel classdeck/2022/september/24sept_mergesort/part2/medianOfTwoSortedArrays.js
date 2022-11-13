let arr1=[1,2];
let arr2=[3,4];
function median(nums1,nums2)
{
    
    let arr=merge(nums1,nums2);
    let mid=Math.floor((arr.length-1)/2);
    if(arr.length%2===0)
{
 return (arr[mid]+arr[mid+1])/2;
}
else{
    return arr[Math.floor((arr.length-1)/2)];
}
   function  merge(nums1,nums2)
    {
        let result=[];
        let i=0;
        let j=0;

        while(i<nums1.length && j<nums2.length)
        {
            if(nums1[i]<nums2[j])
            {
                result.push(nums1[i]);
                i++;
            }
            else{
                result.push(nums2[j]);
                j++;

            }
        }
        while(i<nums1.length)
        {
            result.push(nums1[i]);
            i++;
        }
        while(j<nums2.length)
        {
            result.push(nums2[j]);
            j++;
        }
        return result;
    }

}
console.log(median(arr1,arr2));