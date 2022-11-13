let products=
[
    {

        name: 'IphoneX'
        ,category:'Electronics',price:80000
        ,quantity:10
    },
    {
        name: 'Ipad'
        ,category:'Electronics',price:100000
        ,quantity:3
    },
    {
        name: 'Maggie'
        ,category:'Food',price:200
        ,quantity:2
    },
    {
    name: 'Painkiller'
        ,category:'Medicine',price:80,
        quantity:3
    },
    {
        name: 'Adidas'
        ,category:'Shoes',price:8000
        ,quantity:5
    }
    
    
]

alert(' Welcome to Amazon');


shoppingCart=[];
while(true)//this is the main loop in which the program runs.
{
    alert('Please respond with the number you want to buy or type "n" to exit');
    let display='';
    for(let i=0;i<products.length;i++){
       if(products[i].quantity>0){
        // display+='\n'+(i+1)+'. '+products[i].name + '  '+ products[i].category+' :  ₹' + products[i].price;better way see below.
        display+=`\n ${i+1}. ${products[i].name}  ${products[i].category} ₹ ${products[i].price} `; 
}  //this loops shows the menu.
    }alert(display)
    let choice=prompt('Enter your choice');
    if(choice=='n')
{let total=0;
    for(let items of shoppingCart)
{
total+=items.price;
}
alert('Your Total is : ₹'+total);
    break;
}
    let selectedItem=products[choice-1];
selectedItem.quantity--;   
shoppingCart.push(selectedItem); 

    
}    