let car={name:'BMW',year:2022,type:'sports',motor:'electric'};
console.log(car);
car.name='Ferrai'
console.log(car.name);
while(true)
{
    key=prompt("Enter the key you want to know: or type exit to Exit");
    if(key=='exit')
    {
    break;
}
    alert(`The key ${key} you want to know is ${car[key]}`);//[] very use to take keyword dynamically.

}