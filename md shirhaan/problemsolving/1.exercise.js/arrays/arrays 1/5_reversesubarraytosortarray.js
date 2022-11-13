// Q.Given an array of numbers.You need to find if reversing a subarray can sort the array. For example :-
// input -[1,2,3,4,5]
// output -True (reversing {5,4,3}will sort the array).
let a= [5,4,6,7,8,9,10];
function test() {
                   
    let  i=1, j, k;

    
    //keep moving prashant until the sequence is ascending
    while(a[i] > a[i-1] && i<a.length) {
        i++;
    }
    
    //incase prashant reaches end of array, then there is only one valid ascending sequence, hence return true
    if(i == a.length) {
        return true;
    }
    
    i--;//prashanth comes one step back


    //start harshal from next position of prashant for the second sequence which will be descending
    j = i+1;

    //keep moving harshal until the sequence is descending
    while(a[j] < a[j-1] && a[j] >a[i-1] && j<a.length) {
        j++;
    }

    //if harshal found an element lesser than the last element of first sequence, we can return false
    if(a[j] < a[i]) {
        return false;
    }

    //if harshal reaches end of array, we can return true
    if(j == a.length) {
        return true;
    }

    //we bring anuj to the scene from harsha+1
    k = j;

    while(a[k] > a[k-1] && a[k] > a[i] && k<a.length) {
        k++;
    }

    //if anuj finds anyone smaller than where prashant is standing, then we cant make
    //a proper ascending order after reversing the middle sequence, hence we return false
    if(a[k] < a[i]) {
        return false;
    }

    //if anuj is able to successfully reach the end, that means we found the valid array, hence return true
    if(k == a.length) {
        return true;
    }

    //in case anuj while moving through ascending sequence, finds a descending sequence, return false
    if(a[k] < a[k-1]) {
        return false;
    }

}
console.log(test());