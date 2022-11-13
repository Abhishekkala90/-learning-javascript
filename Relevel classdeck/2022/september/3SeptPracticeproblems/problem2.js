/*Find the pair of elements in a given array A such that the sum of the pair is equal to N
Input: A = [10, 20, 10, 40, 50 , 70], N=50
Output: 2,3
*/
//My solution: 2 loops ka solution is better than sorting one loop.
// const A = [ 20, 40, 50 , 70,10]
// let  N=50;
// function pairSum(a,n)
// {
//     for(let i=0;i<a.length;i++)
//     {
        
//         if(a[i]+a[i+1]==n)
//         {
//            let  result=[i,i+1]
//             return result;
//         }
      
//     }
// }

// console.log('Mysolution:',pairSum(A,N));//doesn't work without sorting but it will make program slow by nlog n and if we use double loop it will make program n*n slow. so 


//Relevel's solution:also called #mapping it is fast.

// function pairSum(a,n)
// {
//     let map=[];
//     let index=[];
//     for(let i=0;i<a.length;i++)
//     {
//         if(map[a[i]]!=undefined)
//         {
//             index[0]=map[a[i]];//because it contains index of previous no.
//             index[1]=i;
//         }
//         else
//         {
//             map[n-a[i]]=i;//this expression will give its index to its conjugate.
//         }
//     }
//     return index; 
// }
// const a = [ 20, 40, 50 , 70,10];
// let  n=50;
// console.log('Indexes of the numbers whose sum is equal to :',n,' are:',pairSum(a,n));

// far better approach:
function pairsum(a,n)
{
    let map={}//you can also use the array but passing such great indexes to array will make it slow and takes memory since object takes index as keys so it will take only key value pairs equal to the length of the passed array.
    for(let i=0;i<a.length;i++)
    {
        if(map[n-a[i]])//null is treated as false so it won't enter the condition.till it get any value//without undefined bhi work krega pr leetcode ya spider monkey accepted nahi krega.always use ubdefined as it is checking if the element exist in the object so it can take null as value and in some case it will not return nothing.
        return [map[n-a[i]],i];//map[n-a[i]] is conjugate of map[a[i]]
        else
        {
            map[a[i]]=i;//it will give the index of array to the map[a[i]]
        } 
    }
}
const a = [ 10,20, 40, 50 , 70];
let  n=50;
(console.log(pairsum(a,n)));