// // function mergeSort(arr)
// {
//     if(arr.length<2)
//     {
//         return arr;
//     }
//     let middle=Math.floor(arr.length/2);
//     let left=arr.slice(0,middle);
//     let right=arr.slice(middle,arr.length);
//     return machine(mergeSort(left),mergeSort(right));
// function machine(left,right)
// {
// let leftindex=0;
// let rightindex=0;
// let result=[];
// while(left.length>leftindex && right.length>rightindex)
// {
//     if(left[leftindex]<right[rightindex])
//         {
//         result.push(left[leftindex]);
//         leftindex++;
//         }
//     else
//     {
//     result.push(right[rightindex]);
//  rightindex++;
//     }
//     }
//     return result.concat(left.slice(leftindex)).concat(right.slice(rightindex));
// }

// }
// let arr=[6,8,3,1,4,9,8,3,5,7,9,4,4];
// console.log(mergeSort(arr));
// console.log(arr);

//shirhaan's way


function mergeSort(arr) {
    if(arr.length == 1) {
        return arr;
    }

    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));//slice creates a new array.//we are not passing  the reference here so it is taking more memory we can optimise it.By passing the reference.
    let right = mergeSort(arr.slice(mid)); 
    return merge(left, right); 
}

function merge(arr1, arr2) {
    let result = [];

    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    while(i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while(j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    return result;
}
let arr=[6,8,3,1,4,9,8,3,5,7,9,4,4];
console.log(mergeSort(arr));
console.log(arr);