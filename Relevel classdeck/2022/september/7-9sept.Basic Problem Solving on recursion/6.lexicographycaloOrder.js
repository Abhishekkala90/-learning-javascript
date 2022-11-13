function lexNumbers(n)
{
    let sol = [];
    
     machine(temp, n, sol)
    {
        
        if (temp > n)
        return;
        sol.push(temp);
        if(temp==0)
        {
            temp++;
        }
        machine(temp * 10, n, sol);
        if (temp % 10 != 9)
        machine(temp + 1, n, sol);
    }
    machine(0, n, sol);
    return sol;
}
 
let n = 50;
console.log(lexNumbers(n));
 