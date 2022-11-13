
let repairman ={
    name:'mannu',
    mob:123,
    call: function(){
        console.log('calling mannu on 123');
    }
}
let technician={
    call: function(){
        console.log('this is dummy');
    }
}
let car={ name: 'ferrari', model: 2019,fueltype:'petrol',technician:repairman,//object inside an object.
 run:function(){ 
    console.log('wroom wroom')
 },
 brake: function(){
    console.log('Stopping the car');
 }
 ,emergency:function(){
    this.technician.call();
    //when function is a key inside an object then use this. to call it
//we can also do this by calling keyword with outside function eg-> repairman.call();
 }
}//an object can have function.we have to write function in this way only.
car.run();
car.emergency();
for(let test in car){
    console.log(car[test]);
}
//very very important concept.
console.log(Object.keys(car));//we got all the keys inside the object car.
console.log(Object.keys(car)[0]);//we got key at index 0.
console.log(Object.keys(car)[3]);
console.log(car[Object.keys(car)[3]]); //dynamic access literal[] this is used to get element inside the following key.