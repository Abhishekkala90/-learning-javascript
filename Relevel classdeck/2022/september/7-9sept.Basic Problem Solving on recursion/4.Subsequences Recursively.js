//Subsequences Recursively
/*
Let’s take an input array, the array is an integer array
int arr[ ] = {1,2,3,4,5,6,7,8,9,10}; (sorted array)
SubSequence: May not be contiguous but maintain the relative order.
Elements in the subsequence appear in the same order as in the original array; the only difference from the sub
array is that they may not be contiguous.
For example:
Consider original array as {1,2,3,4,5,6,7,8,9,10},
• {4,5,6,7} is a subarray and a subsequence of the original array
• {4,6,7} is not the subarray but is a subsequence of the original array (because 4,6,7 they
• appear in the same order as they appear in the original array)
• {1,9,10} is not the subarray but a subsequence of the original array because 1, 9, 10 their relative order is the same in
the original array
• {5,4} is not the subarray nor a subsequence because the relative order of 5 and 4 is different in the original array
• {1,4,7,3} is not the subarray nor a subsequence because the order is maintained only up till 1,4,7 only.
Note: All subarrays are subsequences but all subsequences are not subarray
*/
function printSubSeq(bag, i, arr,result) {

    if(i == arr.length) {
        console.log(bag);
        return ;
    }
    
    bag.push(arr[i]);
    printSubSeq(bag, i+1, arr,result);
    bag.pop();
    printSubSeq(bag, i+1, arr,result);
    
}



printSubSeq([],0,[1,2],[]);