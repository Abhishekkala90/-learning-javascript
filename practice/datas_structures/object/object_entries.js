let repairman ={
    name:'mannu',
    mob:123,
    call: function(){
        console.log('calling mannu on 123');
    }}

let car={ name: 'ferrari', model: 2019,fueltype:'petrol',technician:repairman,//object inside an object.
 run:function(){ 
    console.log('wroom wroom')
 },
 brake: function(){
    console.log('Stopping the car');
 }
 ,emergency:function(){
    this.technician.call();}}
   console.log( Object.entries(car));//it gives two dimensional array i.e key as well as element.
   console.log( Object.entries(car)[2]);

   //Object.assign method
