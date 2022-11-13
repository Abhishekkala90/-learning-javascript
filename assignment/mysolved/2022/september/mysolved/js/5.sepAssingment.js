//Take an array of size 10. Calculate sum of all array elements using tail recursion.
function addElement(arr,i)
{
    let l=arr.length;
    if(i==l)
    return null;
    return arr[i]+addElement(arr,i+1);

}
const array=[1,2,3,4,5,6,7,8,9,10];
console.log(addElement(array,0));

// Write a function that takes a string and returns if string is a palindrome.
function isPalindrome(str)
{
    l=str.length;
    if(l==0)
    return 'It is a palindrome';
   if(str[0]!=str[l-1])
   return 'It is not a palindrome';
    if(str[0]==str[l-1])
    {
           return isPalindrome(str.slice(1,l-1));
}
 }
console.log(isPalindrome('malayalem'));