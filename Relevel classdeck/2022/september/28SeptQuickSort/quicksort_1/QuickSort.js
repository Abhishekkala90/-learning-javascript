function quickSort(arr,start, end) {
    if(start >= end) {
        return;
    }

    let pivot =start;
    let count = 0;
    let found = 0;
    for(let i = start+1; i<=end; i++) {
        if(arr[i] <= arr[pivot]) {
            {
                found++;
                swap(arr, i, found);
            }
            count++;
        } 
    }
    
    swap(arr, pivot, pivot+count);
    quickSort(arr, start, count-1);
    quickSort(arr, count+1, end);
    
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let arr = [8,5,7,6,9,4];
quickSort(arr, 0, 5);