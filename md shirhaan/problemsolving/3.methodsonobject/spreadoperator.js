// ...called spread operator
let person={name:'John',age:34,Height:182}
person.gender='male';
let newperson={...person,id:123};
console.log(person);
console.log(newperson);
