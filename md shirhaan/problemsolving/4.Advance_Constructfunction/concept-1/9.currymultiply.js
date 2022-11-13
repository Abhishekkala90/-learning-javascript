

//ordinary function for multiplication using arguments
const multiply=(a,b,c)=>
{
    return a*b*c;
}
//currying function for multiplication.
const currymultiply=(multi)=>{
    return (a)=>{
        return (b)=>{
            return (c)=>{
                return multi(a,b,c)
            }
        }
    }
}
const multiplication = currymultiply(multiply);
console.log(multiplication(1)(2)(3));