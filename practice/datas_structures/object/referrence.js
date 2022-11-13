let name='cat';
let duplicateName=name;
console.log(duplicateName);

// all other datatypes are primitive cause they are light
// objects and arrays are referrence type.
let person =
{
    name:'cat',
    age: 15
}
let person2=person;
person.age=66;// i have changed the element in object person but the change will also be reflected in object person2 also.
console.log(person2);

