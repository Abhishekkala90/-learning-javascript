// write a javascript program to print below pattern having numbers in pyramid form along with its mirror image
function printPyramidUp(n) {
    for (let i = 1; i <= n; i++) {
        let str = giveMeNSpaces(i - 1);
        for (let j = i; j <= n; j++) {
            str += j + "   ";
        }

        console.log(str);
    }
}
function printPyramidDown(n) {
    for (let i = n; i > 0; i--) {
        let str = giveMeNSpaces(i - 1);
        {
            for (j = i; j <= n; j++) {
                str += j + '   ';
            }
            if (i == n)
                continue;
        } console.log(str);
    }
}
function giveMeNSpaces(n) {
    let str = "";
    for (let i = 0; i < n; i++) {
        str += "  ";
    }
    return str;
}
function mirrorPyramid(n) {
    printPyramidUp(n);
    printPyramidDown(n)
}
mirrorPyramid(8);








// Write a program to find the second smallest number from array using loops concept
// Input -> [11,34,54,22,13,78]
// Output -> 13
function findSecondLargestElem(arr){
    let first = arr[0] , second = arr[1];

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
let arr = [11,34,54,22,13,78];
findSecondLargestElem(arr);


