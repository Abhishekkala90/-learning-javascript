/*
Given a string, write a recursive function that checks if the given string is a palindrome or not a palindrome.
Example 1:
Input : malayalam
Output : Yes
Reverse of malayalam is also malayalam.
Example 2:
Input : max
Output : No
Reverse of max is not max.
*/
function isPal(str) {
    if(str.length <= 1) {
        return true;
    }
    let lastIndex = str.length-1;
    if(str[0] != str[lastIndex]) {
        return false;
    }
    return isPal(str.slice(1, lastIndex));
}
console.log(isPal('mallam'));