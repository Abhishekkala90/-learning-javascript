let person={
    name:'Shirhaan', favfruits:['🥝','🥥','🍇'], hobbies:['🛴','🚒','🏍','🤽‍♂️' ],street: 'B.V Road',lane:'Vaslane',Mobilenums:[1234,4567,897]
}
for(let key in person)//for in loops very important for objects
{ 
console.log( `${key} : ${person[key]}`);
}