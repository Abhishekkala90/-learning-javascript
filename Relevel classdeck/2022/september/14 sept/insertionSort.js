//Insertion sort using for loop

//in best case if the datastructure is already sorted  then it will not enter the second loop so the time complexity is (o)N only in worst case it will be (O)N^2...same as bubble sort but selection sort doesn't have any  such case.It  is also an stable sort like bubble sort.
let arr = [37, 25,22, 24, 26];

function insertionSort(arr) {
    for(let i = 1; i<arr.length; i++) {
        let temp = arr[i];
        
        let j = i-1;

        while(j>=0 && arr[j] > temp) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = temp;
    }
}

// let arr = [37, 25,22, 24, 26];
insertionSort(arr);
console.log(arr);