let cnt=0;
function my_recursive_function(n)
{
if(n == 0)
return;
cnt++;
my_recursive_function(n/10);
}

my_recursive_function(123456789);
console.log(cnt);
