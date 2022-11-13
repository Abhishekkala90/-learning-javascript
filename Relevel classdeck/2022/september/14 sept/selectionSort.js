// go through visual go for detailed explaination.
let arr=[12,1,2,3,4,5,6,7,8,43,2,5,6,43,3];
function selectionSort(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        let min =arr[i];
        for(let j=i+1;j<arr.length;j++)
        {
        if(min>arr[j])
        {
            min=arr[j];
            arr[j]=arr[i];
            arr[i]=min;
        }
    }
    }
    return arr;
}

selectionSort(arr);
console.log(arr);


// function selectionSort(arr) {
//     for(let i=0; i<arr.length-1; i++) {
//         let smallest = i;
//         for(let j=i; j<arr.length; j++) {
//             if(arr[j] < arr[smallest]) {
//                 smallest = j;
//             }
//         }
//         let temp = arr[i];
//         arr[i] = arr[smallest];
//         arr[smallest] = temp;

//     }
// }

// let arr=[12,1,2,3,4,5,6,7,8,43,2,5,6,43,3];
// selectionSort(arr);
// console.log(arr);