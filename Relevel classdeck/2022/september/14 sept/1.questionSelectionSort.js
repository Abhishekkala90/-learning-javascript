/*
Give an array of name of country, you are supposed to sort it in lexicographical order using the
selection sort
Input : [“India”,”Australia”,”China”,”Russia”,”Brazil”,”Japan”]
Output: [”Australia”,”Brazil”,”China”,“India”,”Japan”,”Russia”]
*/
let arr=['India','Australia','America','China','Russia','Brazil','Japan'];
function selectionSort(a)
{
   let  temp;
    for(let i=0;i<a.length;i++)
    { temp=a[i];
        for(let j=i+1;j<a.length;j++)
        {
            if(a[j]<temp)
            {
                temp=a[j];
                a[j]=a[i];
                a[i]=temp;
        
            }
        } 
    }
    return a;
}
selectionSort(arr);
console.log(arr);
// function selectionSort(inputArray)
// {
//     var i, j, minimumIndex;
 
//     for (i = 0; i < inputArray.length-1; i++)
//     {
//         // Initialize the current element as minimumIndex
//         minimumIndex = i;
//         for (j = i + 1; j < inputArray.length; j++)
//         {
//             if (inputArray[j].localeCompare(inputArray[minimumIndex])==-1)
//             {
//                 minimumIndex = j;
//             }
//         }
//         // Swap the found minimum element with the current element
//         if (minimumIndex != i)
//         {
//             var temp = inputArray[minimumIndex]
//             inputArray[minimumIndex] = inputArray[i]
//             inputArray[i] = temp
//         }
//     }
//     return inputArray
// }
  
// // This is our unsorted array
// var arr = ["India","Australia","China","Russia","Brazil","Japan"];
// console.log(selectionSort(arr));