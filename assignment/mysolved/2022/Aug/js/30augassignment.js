/*Requirements: "Bikers A and B started the journey and A having X litres of petrol and B having Y litres of petrol. K
and L are the km per litre for A and B bikes.
Let us consider halt as an array a1, a2, a3, .... an where n is the length of the array. a represent distance
from one halt to another
.

Write a program to find each biker will cross how many halts based on the petrol quantity and the litre
per km."
*/

const array=[5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100];
const A={petrol:3,average:18};
const B={petrol:6,average:15};
function findRange(arr,a,b)
{let result={'Halts passed by A:':0,'Halts passed by B:':0}
for(let i=0;i<arr.length;i++)
{
    if(a.petrol*a.average>=arr[i])
    result["Halts passed by A:"]=i+1;
    if(b.petrol*b.average>=arr[i])
    result["Halts passed by B:"]=i+1;
    
}
return result;
}
console.log(findRange(array,A,B));
