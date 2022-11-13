let person={
    name:'vikrant',
    age:20
}
console.log(person.age);//one way to get the nested variable/key element
//anotherway to do this with [].
console.log(person['age']);

//console.log(person[age]); //will say age is not defined//this will look for age variable that has a global scope.

let key='name';
console.log(person[key]);//here it is useful in case you  make a program and take input to get data form inside of object.

//suppose we want to add a new key inside of object.
person.roll_no=67;
//similarly you can add functions as well.
person.printMr= function add(){

    console.log("Mr. "+ this.name);
    return ;//here without this it will look for name variable having a global scope.by using this it  will look for the keyword inside the object.
}
console.log(person);
console.log(person.printMr())