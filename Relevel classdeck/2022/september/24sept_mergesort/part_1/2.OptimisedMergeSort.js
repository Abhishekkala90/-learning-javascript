//here we are not creating small array every time but taking reference of the array.
function mergeSort(arr, start, end) {
//   start=start||0;
//   end=end||arr.length-1;
    if(start == end) {
        return;
    }

    let mid = Math.floor((start+end)/2);
    mergeSort(arr, start, mid);// [8]
    mergeSort(arr, mid+1, end);  //[7]
    return merge(arr, start, mid, mid+1, end); // [7,8]
}

function merge(arr, s1, e1, s2, e2) {
    let result = [];

    let i = s1;
    let j = s2;

    while(i <=e1 && j <= e2) {
        if(arr[i] < arr[j]) {
            result.push(arr[i]);
            i++;
        } else {
            result.push(arr[j]);
            j++;
        }
    }

    while(i <= e1) {
        result.push(arr[i]);
        i++;
    }

    while(j <= e2) {
        result.push(arr[j]);
        j++;
    }

    let k = 0;
    for(let i = s1; i<=e2; i++) {
        arr[i] = result[k];
        k++;
    }
    return arr;
}
let arr=[5,2,6,1,7];
console.log(mergeSort(arr,0,arr.length-1));
// console.log(arr);
