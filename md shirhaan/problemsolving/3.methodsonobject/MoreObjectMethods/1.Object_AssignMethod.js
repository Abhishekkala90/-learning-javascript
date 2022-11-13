
const car = {
Color: 'Red',
Brand: {
Audi: { model : 'A7'}
}
}
let a =Object.assign({}, car);
a.Brand={
    BMW:{model:'X1'}
}
console.log(a);//Since it is clone.
console.log(car);