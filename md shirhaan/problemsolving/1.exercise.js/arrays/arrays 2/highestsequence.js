let a =[35,3,4,88,9,10,21,5,6]
function maxcons(arr) {

    arr.sort((a,b)=>a-b);

    if(arr.length == 0) {
        return 0;
    }
    
    let highest = 1;
    let current = 1;

    for(let i =0; i<arr.length-1; i++) {
        if((arr[i] + 1) == arr[i+1] ) {
            current++;
        } else {
            current = 1;
        }
        if(current > highest) {
                highest = current;
        }
    }
    return highest;
}
console.log(maxcons(a));