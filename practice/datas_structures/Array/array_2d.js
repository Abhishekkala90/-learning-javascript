let fruits=[['🥝','🥥','🍇','🍈'],['🍉','🍊'],['🍋','🍌','🍍','🥭','🍎'],['🍏','🍐','🍑','🍒','🍓', '🍅']] ;//example of 2d array
let veggies=['🍅','🍆','🥔','🥦'];//single dimensional array.
console.log(fruits[2]);
console.log(fruits[2][2]);//to access pineapple
for(let i=0;i<fruits.length;i++)
{let floor='';
 for(let j=0;j<fruits[i].length;j++){
   floor+=fruits[i][j]
}console.log(`Floor no.${i} : ${floor}`);
}