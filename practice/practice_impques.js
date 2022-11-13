// Q1.Temp and school

// let temp=25;
// let rain='yes';
// if(temp<=25 && temp>=20 &&rain=='no')
// {
//   console.log('Go out in Park');
// }
// else if(temp<=20 && temp>=18 && rain=='yes')
// {
//     console.log('Play in school')
// }
// else
// {
//   console.log('Should not step out of home');
// }



//  Q2.Pass or fail
// let marks=33;
// (marks>=40)? console.log('Pass'):console.log('Fail');



// Q3.Adult/Teenager/Kid using ternary operators
// age=6;
// age>19? console.log('A'):age>10?console.log('T'):console.log('K')



// Q4.Check if a number is positive/negative/zero using switch case
// let number=7;
// switch (true) //value inside switch is taken and compared with every case value if it's equal to the value of switch then it is it enters inside  the case
// {
//   case(number<0):
//   {
//     console.log('Number is negative');
//     break;
//   }
//   case(number>0):
//   {
//     console.log('Number is positive');
//     break;
//   }
//   default:
//     console.log("Number is Zero")
// }

//Another way
// let number2=6;
// switch (true) //value inside switch is taken and compared with every case value if it's equal to the value of switch then it is it enters inside  the case
// {
//   case(number2<0):// case has a boolean value in this case that's why we gave boolean value to switch
//   {
//     t='Number is negative';
//     break;
//   }
//   case(number2>0):
//   {
//     t='Number is positive';
//     break;
//   }
//   default:
//     t="Number is Zero"
// }
// console.log(t);



//Q5.(i)Hcf of the number:
// n=54;
// x=72;
// for(let i=1;i<=n;i++)
// {
//   if(n%i==0 && x%i==0)
//   {
//     result=i;
//   }
// }console.log('H.C.F of the two given  numbers is:',result);

// (ii)HCF with taking input

// let hcf;
// const num1 = prompt('Enter a first positive integer: ');
// const num2 = prompt('Enter a second positive integer: ');

// for (let i = 1; i <= num1 && i <= num2; i++) {

//     if( num1 % i == 0 && num2 % i == 0) {
//         hcf = i;
//     }
// }
// document.write('The hcf of '+num1+' & '+num2+' is :'+ hcf);




// Q6.(i).Lcm of two numbers(for loop)

// let n=27;
// let x=3;
// for(let i=(n*x);((i>x)&&(i<=(n*x)));i--)
// {
//   if(i%n==0 && i%x==0)
//   {
//     result=i;
//     console.log(result);//Giving decending order of multiple
//   }
//   }
//   console.log('L.C.M of the given number is:',result);

// (ii)Lcm of two numbers(While loop)

// n=56;
// x=124;
// let i;
// i=(n*x);
// while(i<=n*x && i>0)
// {
//   if(i%n==0 && i%x==0)
//   {
//     result=i;
//     console.log(result);//Giving decending order of multiple
//   }
//   i-- ;
//   }
//   console.log('L.C.M of the given number is:',result);


// Q.7 Swapping value of a & b.
// let a =34;
// let b= 56;
// let c =0;
// c=a;
// a=b;
// b=c;
// console.log('The value of  a is:'+a+'The value b of is: '+b)



// Q8.Reversal of a String.
// let str="pooja";
// let reverse="";
// l=(str.length-1);
// for(let i=l;i>=0;i--)
// {
//     reverse+=str[i];
// }
// console.log(reverse);



//  Q9.sum of all Digits
// let num =8754678;
// let num2;
// str=num.toString();
// l=str.length;
// let result=0;
// for(let i=0;i<l;i++)
// {
//     result+=(+str[i]);
// }
// console.log(result);



// Q10.Armstrong Number(number equal to the sum of digits cube)

// let number=372;
// n=number.toString();
// l=n.length;
// result=0;
// for(let i=0;i<l;i++)
// {
//     result=result + Math.pow((+n[i]),3);
// }if(number==result){
//     console.log('Number is armstrong')
// }
// else{
//     console.log('Number is not armstrong')
// }



// Q10.Create a pattern using '*'.

// for(let i=1;i<=7;i++)
// {
//    let  t='';
// for(let j=1;j<=i;j++)
// {
//     t=t+'*';
// }
// console.log(t);
// }



// Q11.Pyramid pattern using '*'
// let n=38;
// let r=n;
// for(let i=0;i<=n;i++)
// {
//     let s='';
//     let t='';
//     for(let k=r;k>=0;k--)
//     {
//         s=s+' ';
//     }
//     if(i==0 || i%2==0){
//     for(let j=0;j<=i;j++)
//     {  
//     t=t+'* ';
//     }
//     console.log(s+t);
// }
// r--;
// }
 



// Q12.Fibonacci series.(0,1,1,2,3,5,8,13...)
//  Very very important logic

// (i)By recursion:-  (Best way)
//  function recursion(n){
//     if(n<=1)
//     {
//         return n;
//     }
//     else{  
//         return recursion(n-1) +recursion(n-2);

// }}

// let n=15;
// for(let i=0;i<=n;i++)
// {
//     console.log(recursion(i));
// }

// (ii)Using loops.
// let num1=0;
// let num2=1;
// let sum=0;
// let fibo;
// let n=8;
// for(let i=0;i<n;i++)
// {
// if(i<=1)
// {
// fibo=i;
// }
// else
// {
// sum=num1+num2;
// num1=num2;
// num2=sum;
// fibo=num2;
// }
// console.log(fibo);
// }



// Q13.Write a function for power.
//  function pow(a,b){
//     let resul=1;
//   for(let i=1;i<=b;i++)
//     {
//         resul=resul*a;
//     }   
//     return resul;
// }
// console.log(pow(6,7));
 

// Q14.Print all prime no till given number value.
let n=10000;
let total =0;
for(let i=2;i<=n;i++)
{
    remainder=1;
    for(let j=2;j<i;j++)
    {
remainder=remainder*i%j;
}
if(remainder!=0 || i==2)
{let z=1;
    console.log(i);
    total= total+z;
}
}
console.log('Total prime no between 1 and ' +n+ ' is :',total)
