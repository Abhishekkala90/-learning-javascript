arr=[1,2,3,4,5,6,7];
let result=arr.reduce((acumulator,element)=>acumulator*element);
console.log(result);
for(var i=0;i<6;i++)
{
    setTimeout(function()
    {
        console.log(i);
    },i*1000);
}