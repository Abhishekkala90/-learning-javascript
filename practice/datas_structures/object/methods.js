//Object.freeze() a frozen object cannot be changed properties cannot be changed as well as delete existing property and new property cannot be added.
let person={
    name:'cat',
  age:10  
}
let animal={
    name:'dog',
  age:20  
}
let car={
    name:'mercedes',
  power:200  
}
//we can change age simply.
person.age=20;
console.log(person.age);
Object.freeze(person);
//now if we try to change any thing in object we cannot.
person.name='dog';
console.log(person);//see the name doesn't change.
// Object.seal();cannot add new property or can delete existing property but can edit existing property.
//Object.seal();
Object.seal(animal);
animal.name='billu';
console.log(animal);//name changed.
animal.type='Carnivorous';
console.log(animal);//type didn't added to the object.
delete person.name;
console.log(person);
delete car.power;
console.log(car);//power key deleted.
//Object.is() method is used to check if the following method is applied  on the object or not it gives boolean value.
console.log(Object.isFrozen(animal));
console.log(Object.isSealed(animal));
console.log(Object.isFrozen(person));
console.log(Object.isSealed(person));
console.log(Object.isFrozen(car));
console.log(Object.isSealed(car));
