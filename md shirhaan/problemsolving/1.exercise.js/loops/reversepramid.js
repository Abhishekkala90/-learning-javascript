//1.My approach.
// function pyramid(n){
// let  space='';
// for(let i=1;i<=n;i++)
// {
//     let result='';
    
    
// for(let j=i;j<=n;j++)
// {
// result+=j+' ';
// }    
// console.log(space+result)
// space=space +" ";
// }}
// pyramid(9);

//2.shirhaan's approach.
function printPyramid(n) {
    for(let i = 1; i <= n; i++) {
        let str = giveMeNSpaces(i-1);
        for(let j = i; j <= n; j++) {
            str+=j+" ";
        }
        
        console.log(str);
    }
}


function giveMeNSpaces(n) {
    let str = "";
    for(let i = 0; i<n; i++) {
        str+= " ";
    }
    return str;
}
printPyramid(8);