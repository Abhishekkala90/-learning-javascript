/*
4. Which Javascript function is used to update the property of the object but prevent the
object property being deleted. (crs-fs-javascript) (Medium)
b. Object.seal(obj) (Correct)
*/
const car = {
    Color: 'Red',
    Brand: {
    Audi: { model : 'A7'}
    }
    }
    Object.seal(car);
    car.Color='yellow';//See here car key is still the same.
    console.log(car);