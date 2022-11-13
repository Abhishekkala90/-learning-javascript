// Q.Reverse Array.
let a=[-5,3,-4,88,-9,-10,21,5,6];
function reverse(arr) {
    
    let b=0;
    let e=arr.length-1;
    let temp;
    while(e>b)
    {
            temp=arr[b];
            arr[b]=arr[e];
            arr[e]=temp;
            e--;
            b++;
        }
    console.log(arr);
    }
    reverse(a);
