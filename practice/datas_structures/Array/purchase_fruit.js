function findfruit(f){
    for(let i=0;i<fruits.length;i++)
    {
        if(fruits[i]==f)
        return i; 
        
    }
    return -1;
    }
    let fruits=['🍈','🍉'] ;
while(true)
{
    if(fruits.length==0)
    {alert("No items are available.")
break;}
    alert(`Available fruits are: ${fruits}`);
    let fruitrequested=prompt('Which fruit you want to buy:');
    if(fruitrequested=='n'){
        break;
    }
    let index=findfruit(fruitrequested);
    fruits.splice(index,1);

        alert('Purchase completed if you want to buy another fruit enter fruit from available item below else type "n" to exit');
}
