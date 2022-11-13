//Given a number n you need to find all the prime numbers less then and equal to n.
function isprime(n)
{
    if(n<=1)
    return false;
    for(let i=2;i<n;i++){
    if(n%i==0)
return false;
}
return true;
}
function primeseries(n)
{
    let prime=[];
for(let i=0;i<=n;i++)
{if(isprime(i)==true)
prime.push(i);
}
console.log(`Prime numbers under ${n} are : ${prime.join(' ')}`);
}

primeseries(100);