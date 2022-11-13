let nums =[1,2,3,4,5];
let multipliedx2Aray=[];
for(let num of nums){
    multipliedx2Aray.push(num*2);
}
console.log(multipliedx2Aray);
// another coolway
let multipliedarray=nums.map(n=>n*2);
console.log(multipliedarray);
// filter
console.log(nums.filter(n=>true));
console.log(nums.filter(n=>false));
console.log(nums.filter(n=>n%2==0));//give even.
console.log(nums.filter(n=>n%2!=0));//give odd.
// reduce is used to reduce it to a single value.
let sum=nums.reduce((sum,n)=>sum+n);
console.log(sum);
mul=nums.reduce((mul,n)=>mul*n);
console.log(mul); 
console.log(animal.forEach(n=>console.log("Cute animal "+n)));