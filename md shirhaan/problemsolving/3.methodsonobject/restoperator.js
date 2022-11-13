function add(...nums)//in this whatever value you will pass will be stored in a single array.
{
console.log(nums + 'hi');
}
let person={name:'cat',age:20,mob:98765,height:181,weight:70
}
add(5,6,3,'cat',8);
 //destructuring in array
 let fruits=['🍉','🍏','🍒','🍓','🥭'];
 let [watermelon,greenapple,cherry,...lostFruits]=fruits;//rest opertor will put the left ones in the single array
 console.log(watermelon);
 console.log(greenapple);
 console.log(cherry);
 console.log(lostFruits);
 let {name,mob,...restItems}=person;//rest operator on object.
 console.log(mob);
 console.log(restItems);
