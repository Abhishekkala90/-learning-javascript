let person={name:'cat',age:20,mob:98765
}
// let name=person.name;
// console.log(name);
//new syntax in 2015.
let {name,mob}=person; //this is called object destructuring.
console.log(name);
console.log(mob);
let {address}=person;//this will give undefined since we don't have any key named address in the object person.
console.log(address);
//Default values in object destructuring.
let newAvenger={realName: 'Tony Stark', city:'California',heroName:'Iron Man'};
let{realName='Downey Jr',location="malibu"}=newAvenger;
console.log(realName);
console.log(location);
//Here the realName was changed to "Tony Stark" but the location had the default value as "Malibu" as there is no corresponding element location in the extracted object.