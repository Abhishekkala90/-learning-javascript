//Q2.Palindrom series till 50.

for(let i=0;i<=50;i++){
  n=i;
  var n, reverse = 0, remainder=0;
  while (n != 0) {
  remainder = n % 10;
  reverse = reverse * 10 + remainder;
    n =parseInt(n/ 10);
  }
  if(i==reverse)
  console.log(i);
}
// Q2.Find the pair of positive integers a,b for A such that:
// A=a^2+b^2
// a<b
// 0<A<10000
let A=5657;
for(let a=1;a<9999;a++)
{
  for(let b=1;b<9999;b++)
  {
    if(b>a && A==(a*a + b*b))
    {
      console.log(a,b)
    }
      }
    }
  


