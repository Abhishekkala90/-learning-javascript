//Impure function will change the state of variables out of its scope and it will always return different output if we pass the same input multiple number of times.

//eg->Input is pluto so in 1990 pluto was a planet but now in 2022 pluto is not a planet now

//Impure function.
let mutateNum=0;//every time we call impureFunction mutateNum takes new value if we take back the global scope from the mutateNum then  the function become pure function.
const impureFunction=(num)=>{
    return (mutateNum+=num);
};
//returns different result given same inputs.
const result1=impureFunction(5);
console.log(result1);
//5
const result2=impureFunction(5);
console.log(result2);
//10
console.log('mutateNum',mutateNum);

/*
Comparison of Pure vs Impure Function.

***Pure
1.It has no side effect.
2.It will return same output if same arguments are passed how many times it executes.
3.It will always returns something.
4.It is useful in some cases.
5.It has no side effect.

***Impure

1.It has  side effects.
2.It will return different output if same arguments are passed how many times it executes.
3.It may take effect without returning anything.
4.It is useful in some cases.
5.It may have side effect.
*/