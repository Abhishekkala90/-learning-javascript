/*Currying
Currying is when you break down a function that takes multiple arguments into a series of function that each take only one argument.
*/
//currying add function.
const add = (a, b, c) => {
    return a + b + c;
};
const multiply = (a, b, c) => {
  return a * b * c;
};

const curryAdd = (sum) => {
  return (a) => {
    return (b) => {
      return (c) => {
        return sum(a, b, c);
      }
    }
  }
}
const addition=curryAdd(multiply);//we are passing the function add here into the currying function.
console.log('curry add',addition(2)(3)(6));
//ordinary function for multiplication using arguments.
//currying function for multiplication.
const currymultiply = (multi) => {
  return (a) => {
    return (b) => {
      return (c) => {
        return multi(a, b, c);
      };
    };
  };
};
const multiplication = currymultiply(multiply);

console.log('curry multi',multiplication(1)(2)(3));
