/* 
Which Javascript function is used to prevent the object property being updated.
(crs-fs-javascript) (Medium)
a. Object.freeze(obj) (Correct)
*/
const car = {
    Color: 'Red',
    Brand: {
    Audi: { model : 'A7'}
    }
    }
    // Object.freeze(car);
    car.Color='yellow';
    console.log(car);