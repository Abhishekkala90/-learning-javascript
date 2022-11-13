//A function is called by directly passing the value of the  variable and any change in the variable inside the function does not affect the outside value of variable.
function passByValue(value)
{
    return value=value+10;
}
let num=99;
console.log('Num before passByValue function call',num);
const pbv=passByValue(num);
console.log('Num after passByValue function call',num);

console.log('Result after passByValue function call',pbv);
