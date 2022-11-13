///Function  itself is an object.

//A function is called by passing the reference of the variable and any change in the variable inside the function will make a change in the value of the outside variable.
//Object and Array

//Function declaration.
function passByReference(a,value)
{
    a.push(value);
    console.log('************console Array into Pass by Reference******');
    console.log(a);
}
//Declaring array and add "pass" string in the array.
const arr=["pass"];
//logging the array before pass by reference.
console.log('**********console array before pass by reference*******');
console.log(arr);
//calling a function  passbyreference with two argument 1->Array 2->string.
passByReference(arr,"by Reference");
//logging the array after pass by reference.
console.log('*************Console Array After Pass by Reference*****');
console.log(arr);//the change made inside the function in  variable is also reflected outside the function in the variable.