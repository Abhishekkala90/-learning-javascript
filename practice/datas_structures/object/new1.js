let test='Alpha';
let person={
    name : 'Abhishek',ID:2,
    college:'D.B.S',
    dob:30-06-1996
}
person.school="s.g.n.p.s";
console.log(person);
//to delete
 delete person.dob;
 console.log(person);
 //if you want to write a key word in quotation.
 person['house']='blue'; //another way without dot
 console.log(person);
//  use of[] with this you can directly call the key inside variable.
person[test]='data';//dynamic access with . it will cause an error.
console.log(person);