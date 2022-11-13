let nums=[1,2,34,5,5,6,77];
console.log(nums.filter(
    function (n){
        return true;
    }
));//all are printed
console.log(nums.filter(
    function (n){
        return false;
    }
));//nothing is printed.
// suppose we only want event.
console.log(nums.filter(n=>n%2==0)//value true hogi to prin false hua to nahi hoga.
);