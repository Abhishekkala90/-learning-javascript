//Print increasing numbers using recursion
function increasingnums(n)
{
    
    
    if(n==0)
    return;
    console.log(n)
    return increasingnums(n-1);
}
increasingnums(50);