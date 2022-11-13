let fruits=['🍈','🍉','🍊','🍋','🍌','🍍','🥭','🍎','🍏'] ;
for(let i=0;i<fruits.length;i=i+2){
console.log(fruits[i]);
}
//methods on array:
//1.push()to add element in the last of array.
fruits.push("hello");
console.log(fruits);

//2.unshift() to add element in the beginning of array.
fruits.unshift  ("🍇");
console.log(fruits);
//3.shift() to remove the first element in   array.
let purchased_fruit=fruits.shift();
console.log(purchased_fruit);
console.log(fruits); 

//4.pop() to remove the last element in   array.
let purchased_fruit2=fruits.pop();
console.log(purchased_fruit2);
console.log(fruits);
// let a=prompt('Enter your age');
//3.slice() to trim the     array.
console.log(fruits.splice(0,1));

// Q:Find place of fruit in array:
function findfruit(f){
for(let i=0;i<fruits.length;i++)
{
    if(fruits[i]==f)
    return console.log(`Position of ${f}  : ${i}`); 
    
}
return console.log('No fruit found');
}
findfruit('🍒')