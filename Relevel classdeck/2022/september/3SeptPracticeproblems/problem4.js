/*
You have an array of n elements. Your job is to find the element that is in majority.
Any element whose count is greater than n/2 will be considered as a majority element.
Example-1:
Input: [3,1,3,3,2]
Output: 3
*/
//My approach:
// const arry= [3,1,2,2,2];
// function elementInMaj(a)
// {
//     const n=a.length;
//     const map={};
//     for(let i=0;i<n;i++)
//     {let count=0;
//         for(let j=0;j<n;j++)
//         {
//             if(a[i]==a[j])
//             {
//                 count++;
//                 if(count>(n/2))
//                 return a[i];
//             }
//         }
//     }return 'no majority';
// }
// console.log('My approach :')
// console.log(elementInMaj(arry));

// //Relevel's approach.

// function findMajority(arr, n)
// {
// let maxCount = 0;
// let index = -1;
// for(let i = 0; i < n; i++)
// {
// let count = 0;
// for(let j = 0; j < n; j++)
// {
// if (arr[i] == arr[j])
// count++;
// }
// if (count > maxCount)
// {
// maxCount = count;
// index = i;
// }
// }
// if (maxCount > n / 2)
// console.log(arr[index]);
// else
// console.log("No Majority Element");
// }
// let arr = [3,1,3,3,2];
// let n = arr.length;
// console.log("Relevel's approach :");
// findMajority(arr, n);

//using hash maps:
const maxOccurance = (array) => {
    let map = {};
  
    for(let element of array){
    if(map[element])
    {
        map[element]++;
    }
    else 
    {
        map[element]=1;
    }}
    for(key in map)
    {
     if(map[key]>array.length/2)
     return key;
    }
    return 'no such number exist';
    }
  
  const arry= [2,1,2,4,2,6,2,2];
  console.log(maxOccurance(arry));

  //more better approach.
  function maxoccurance(a)
  { let map={};
      for(nums of a)
      {
          map[nums]=(map[nums] || null)+1;//short hand for the if conditions// we can use zero or null here but cannot use undefined because undefined + number is not a number .
        }
        for(key of Object.keys(map))//Object.key gives an array of keys of the object and Object.values gives an array of values. that's why we have used for of loop.
        {
            if(map[key]>a.length/2)
            return key;
        }
        return 'no such no exists';
    }
    const array= [2,1,2,4,2,6,2,2];
    console.log(maxoccurance(array));