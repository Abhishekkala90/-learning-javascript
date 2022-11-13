// Using Computed property name, we can specify the name of a property via an expression if we put it in square brackets.
// Note that  the property name should be a Strin g.
person={ name:'car',age:20,mob:98765, address:'somewhere'};
let fullName=person.name;//It will contain the value of the key in object person.
console.log(fullName);
let fullName1={person};//an object containing object person
console.log(fullName1);
let {fullName2}=person;
console.log(fullName2);//output is undefined because no key found in object as fullName.//object destructuring.
let umar=person.age;
console.log(umar);//simple way but what if we want to do the same using object destructuring.
umar=null;

//here below is use of computed property.
let {age:umar2}=person;//agar age: ye na krte to undefined ata kyunki umar2 naam ki koi key nahi hai object mai per age name ki hai.
console.log(umar2);

// console.log(age);error dega kyuki age destructure ni hua hai bs umar ne age ki value lli hai.


