//Given a 1D array of size 10 , convert it into a 2D array of size 2x5.
function Array2d(a) {
    let result = [];
    let k = 0;
    for (let i = 0; i < 2; i++) {
        result[i] = [];
        for (let j = 0; j < 5; j++) {
            result[i][j] = a[k];
            k++;
        }

    }
    return result;
}
let arr=[0,1,2,3,4,5,6,7,8,9]
console.log(Array2d(arr));
