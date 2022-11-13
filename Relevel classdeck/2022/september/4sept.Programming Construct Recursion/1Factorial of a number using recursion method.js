/*
We will ask the user to enter the number using a prompt.
When a user enters a negative number, an error message is thrown to enter a positive number.
When a user enters a positive number or 0 the factorial function is called.
If the number entered by the user is greater than 0, then the function will recursively call itself by decreasing the number.
This process will continue until the number becomes 1.
*/
function factorial(n)
{
    if(n==0)
    return 1;
    return n*factorial(n-1);
}
console.log(factorial(0));