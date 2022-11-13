// find maxm and minimum of an Element.
let num=[15,2,1,3,6];
// num.sort((a,b)=>a-b);
// console.log(num);
// console.log("Minimum element is :"+num[0]);
// console.log("Maximum element is :"+num[num.length-1]);

let arr = [8,3,4,2,6,1,7,10];
let min, max;

if(arr[0] > arr[1]) {
    max = arr[0];
    min = arr[1];
} else {
    max = arr[1];
    min = arr[0];
}

for(let i = 2; i<arr.length; i++) {
    if(arr[i] > max) {
        max = arr[i];
    } else if(arr[i] < min) {
        min = arr[i];
    }
}

console.log("Max is", max);
console.log("Min is", min);

