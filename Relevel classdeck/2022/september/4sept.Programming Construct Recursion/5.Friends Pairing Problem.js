/*
Friends Pairing Problem

{1},{2},{3} : all single,
{1},{2, 3} : 2 and 3 are paired now but 1 is single,
{1, 2},{3} : 1 and 2 are paired 3 is single,
{1, 3},{2} : 1 and 3 are paired 2 is single,
Here, we need to find how many ways we can divide n elements into multiple groups.
Here group size will be max of two elements.
For n-th person there are two choices:
1. nth person remain single and we recur for f(n-1)
2. nth person pairs-up with any of the remaining (n-1) persons. We get (n-1)*f(n-2).
So, recursively we can write f(n) = f(n-1) + f(n-1) * f(n-2)
*/
function f(n)//refer to leetcode.
{
    if(n<=2)//in condition because if n=1 the solution wil be only and if the  n is 2 then the solution will be 2 this the base condition.
    return n;
    return f(n-1)+(n-1)*f(n-2);
}
console.log(f(3));