
let person =
{
    name:'cat',
    age: 15
}

let person2=Object.assign({},person);
person.name='dog';//now the element in the object got changed but there is no change in object person2. this is done by assign method of object.
console.log(person2);
console.log(person);