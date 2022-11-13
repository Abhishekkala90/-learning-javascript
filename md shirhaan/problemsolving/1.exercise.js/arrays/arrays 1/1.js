let arr = [8,3,4,2,6,1];
console.log(arr.sort());
let result = [];

let start = 0;

let end = arr.length-1;

for(let i = 0; i<arr.length; i++) {
    if( (i+1) % 2 == 0) {//checking for even index, adding 1 because question starts from 1 and not 0
        result[i] = arr[end--]; // you can also use result.push([arr[end]])
    } else {
        result[i] = arr[start++];  //you can also use result.push([arr[start]])
    }
}

console.log(result);