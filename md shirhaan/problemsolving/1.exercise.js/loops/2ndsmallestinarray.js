// Q1.Find min and max element of an Array.
// let a=[9,8,3,4,5,6,7,8,1];
// let min=a[0];
// let max=a[0];
// for(let i=0;i<a.length;i++)
// {
//     if(min>a[i])
//     min=a[i];
//     if(max<a[i])
//     max=a[i];
// }
// console.log(min);
// console.log(max);
// Q2.Find 2nd smallest no of an Array.
function findSecondLargestElem(arr){
    let first = 0 , second = 0;

    for(let i = 0; i <= arr.length-1; i++){
        if(arr[i] < first){
            second = first;
            first = arr[i];
        }
        else if( arr[i] < second && arr[i] != first){
            second = arr[i];
        }
    }
    console.log(second);
}
let arr = [12, 35, 1, 10, 34, 1]
findSecondLargestElem(arr);