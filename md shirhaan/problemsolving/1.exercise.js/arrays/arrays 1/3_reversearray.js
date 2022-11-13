let a = [1,2,3,4,5,6,7,8];
let swap;
let start=0;
let end=a.length-1;


for(let i=0;i<end;i++)
{
   swap=a[i];
   a[i]=a[end];
   a[end]=swap;
   end--;

}
console.log(a);
// 2.
// let count=0;
// for(let i=a.length-1;i>=0;i--)
// {
// a[count]=a[i];
// count++;
// }
// console.log(a);
//both the solution gives the repeated result of half the digits.sort of a pyramid.

// 3.md sirhaan
// let a = [8,3,4,2,6,1,7,10];

// let  i = 0;
// let j = a.length-1;

// while(i<j) {
//     let temp = a[i];
//     a[i] = a[j];
//     a[j] = temp;
//     i++;
//     j--;
// }

// console.log(a);