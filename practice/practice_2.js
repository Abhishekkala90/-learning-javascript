//Q1.Given volume of prism,radius of incircle  & perimeter of triangular base.Find height of the pyramid.
// let volume=270;
// let perimeter=15;
// let inradius=3;
// let area=inradius*(perimeter/2);//area of triangle.
// let height=volume/area;// height of the pyramid. 
// console.log(height);

//Q2.A man reaches his office 'y' min late when  he travels at x km/h.If he travels at x+2 km/h then he reaches the office 'y-10' min early. Find the distance between his home given the value of x and y.Find Distance to office.
// let x=4; 
// let y=20;
// let t=y*(x+1)-5*(x+2);
// let s1=x;
// let t1=(t+y)/60;
// let s2=x+2;
// let t2=(t-(y-10))/60;
// let d=s1*t1;
// console.log('Distance between his office to home is :',d,'Km/h'); 


// Q3.Bob the builder bricks required;
// let l=24;
// let t=.6;
// let b=8;
// let vol_brick=.24*.12*.08;
// let vol_wall=24*.6*8;
// let mortar=15/100;
// let brick=(vol_wall*(1-mortar))/vol_brick;

// console.log('Bricks required:',Math.ceil(brick));


// Q4.LCM using functions. //Better approach
// function lcm(num1,num2)
// {
//     let greater;
//     if(num1<num2)
// {greater=num2;}
// else{
//     greater=num1;
// }
// while(true){

//     if(greater%num1==0 && greater%num2==0){
//         lcm=greater;
//     break;
    
//     }
// greater++;
// }
//           return lcm;      }
          
//           console.log(lcm(15,45));



// Q5.sum of inner digits of a number.
// let n=45;
// let t=n.toString();
// let l=t.length;
// let str=0;
// console.log(t);
// console.log(l);
// if(l<3)
// {
//     str=-1;
// }
// for(let i=1;i<l-1;i++)
// {
// str+=(+t[i]);
// }
// console.log('Sum of inner digits of the number',n,' is :',str);

// (ii)Using function. Better approach
// function digitsum(num){
//     let result=0;
//     num=parseInt(num/10)
//     while(num>10)
//     {   digit=num%10;
//         result+=num%10;
//         num=Math.floor(num/10);
//     }
// return result;
// }
// console.log(digitsum(58)); 
// 

// Q6.Power function 
// function pow(a,b)
// {result=1;
//  for(let i=0;i<b;i++)
//  {   
//  result*=a
//  }
//  return result;
// }
// console.log(pow(2,4));


// Q7.Nth term of fibonacci.
// (i) function fibo(n)
// {
    
//     sum=0;
//     n1=0;
//     n2=1;
//     for(let i=1;i<n;i++){
// sum=n1+n2;
// n1=n2;
// n2=sum;
// sum=0;
// }
// return n1;
// }
// n=10;
// for(let i=1;i<=n;i++){
// console.log('The ',i,'th term of fibonacci series is : ',fibo(i));
// }

// (ii)Nth term of fibonacci using recursion.//recursion is a bettter approach.

// function fibo(n)
// {
//     if(n==1){
// return 0;
//     }
//     else if(n==2)
//     return 1;
//     else{
//         return fibo(n-1)+fibo(n-2);
//     }
// }

// console.log('The  term of fibonacci series is : ',fibo(5));

// Q8.Given a number do permutation on digits and check if 60 is a factor of the given no return 0 if no and return 1 if yes.

function isdivisibleby60(num){
    if(num%10==0)
    return 1;
    sum=0;
    last=false; 
    secondlast=false;
    while(num!=0){
        i=num%10;
        num=parseInt(num/10);
        if(i%2==0 && (i>0 || last))
        secondlast=true;
        if(i==0)
        last =true;
        if(sum%3==0 && last && secondlast)
        return 1;
        return 0;
    }
}
let a=2304;
console.log(isdivisibleby60(a));
















