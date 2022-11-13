//1.Write code for creating a new sorted array from two sorted arrays in O (n + m) time complexity where n and m are the size of the unsorted arrays.
function sortedArray(a,b)
{
    let result=[];
    let l1=a.length;
    let l2=b.length;
    for(let i=0;i<l1;i++)
    {
    result[i]=a[i];
    }
    for(let j=0;j<(l2);j++)
    {
     result[l1+j]=b[j];
    }
    return result;
}
let a1=[1,2,3,4,5,6,7];
let a2=[10,12,24,45,55];
console.log(sortedArray(a1,a2));

//2. Write code for finding the smallest element in an array.
function smallestElement(a)
{
    let min=a[0];
    for(let i=0;i<a.length;i++)
    {
        if(a[i]<min)
        {
            min=a[i];
        }
    }return min;
}
let arr=[4,6,8,99,2,24,5,7,8,3,45,7,658,74];
console.log(smallestElement(arr));
