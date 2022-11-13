function roots(a,b,c)
{
    if ((b*b-4*a*c)==0)
    {
     ans1=-b/(2*a);
     ans2=-b/(2*a);
     return ans=[ans1,ans2]
    
    }
else if((b*b-4*a*c)>0)
{
    ans1= (-b+ Math.sqrt(b*b-4*a*c))/(2*a);
   ans2= (-b- Math.sqrt(b*b-4*a*c))/(2*a);
   return ans=[ans1,ans2]
}  
else{
 return 'No roots found';  
}}
console.log(roots(1,5,1));