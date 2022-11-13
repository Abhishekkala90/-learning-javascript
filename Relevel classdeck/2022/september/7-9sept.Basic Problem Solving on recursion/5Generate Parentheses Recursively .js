
//shirhaan's approach approach.
// function jarvis(n, str, o, c, result) {
//     if(str.length == n*2) {
//         result.push(str);
//         return;
//     }
//     if(o == 0) {
//         jarvis(n, str+'(', o+1, c, result);
//         return result;
//     }
//       if(o == n) {
//         jarvis(n, str+')', o, c+1, result);
//     } else {
//         jarvis(n, str + "(", o+1, c, result);
//         if(o != c)
//             jarvis(n, str + ")", o, c+1, result);
//     }
    
    
// }

// console.log(jarvis(2, "", 0, 0, []));

// my approach much better approach:
 const generateParenthesis=(n)=>
 {
 const solution=[];
 const generateCombo=(o,c,str)=>
 {
    if(o>c)
    {
    return;
    }
    if(!o&&!c)//! means false  and zero and false is same
    {
        solution.push(str);
        return;
    }
    if(o>0)
    {
        generateCombo(o-1,c,str+'(');
    }
    if(c>0)
    {
        generateCombo(o,c-1,str+')');
    }
 }
 generateCombo(n,n,'')
 return solution;

 }
 console.log(generateParenthesis(3));
