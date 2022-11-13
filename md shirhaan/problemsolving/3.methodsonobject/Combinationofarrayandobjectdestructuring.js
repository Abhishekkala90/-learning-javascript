let Avenger={ realName:'Thor',age:20,city:['California','Malibu'],mob:98765, address:'somewhere'};

let {realName:Hero,city:jgh}=Avenger;
console.log(Hero);
console.log(jgh);
//Destructuring nested object.
let newAvenger={realName:'Thor',age:20,city:['California','Malibu'],mob:98765, address:'somewhere',location:{country:'India',city:'Dehradun'}
}
let {realName:naam,location:shehar,address}=newAvenger;
console.log(shehar);
console.log(naam); 
console.log(address);

let newAvenger1 = {
    realName: "Tony Stark",
    place : {
    country: "USA",
    city: "California"
    },
    heroName: "Iron Man"
   };
    let   {place}=newAvenger1;
    console.log(place);
let {country:desh,city:sheher}=place;
console.log(desh);
console.log(sheher);
