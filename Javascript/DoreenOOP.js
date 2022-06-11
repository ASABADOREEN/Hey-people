let Uganda = function(lakes,rivers,culture,wildlife,){
    this.lakes = lakes;
    this.rivers = rivers;
    this.culture = culture;
    this.wildlife = wildlife;
}
var Uganda1 = new Uganda("victoria","nile","kneeling","lion");
var Uganda2 = new Uganda("kyoga","jordan","dressing","tiger");
console.log(Uganda1.culture)
console.log(Uganda2.lakes)


let School = function( name,director,staff,students){
    this.name = name;
    this.director = director;
    this.staff = staff;
    this.students = students;
}
var school00 = new School("Trinity College","Asaba Doreen",20,2000);
var school01 = new School("Kololo ss","Simon",32,1244);
console.log(school00.name)
console.log(school01.staff)


let House = function(type,bedrooms,kitchen,bathroom){
    this.type = type;
    this.bedrooms = bedrooms;
    this.kitchen = kitchen;
    this.bathroom = bathroom;
}
var house1 = new House("mansion",8,"yes",6);
var house2 = new House("bunglow",4,"yes",2);
console.log(house1.bedrooms)
console.log(house2.bathroom)

let Hospital = function (type,doctors,nurses,wards){
    this.type = type;
    this.doctors = doctors;
    this.nurses = nurses;
    this.wards = wards;
}
var hospital2 = new Hospital("private",3,10,8);
var hospital3 = new Hospital("government",6,28,20)
console.log(hospital2.type)
console.log(hospital3.doctors)


   let Laptop = function(brandName,RAM,price,core){
       this.brandName = brandName;
       this.RAM = RAM;
       this.price = price;
       this.core = core;
   }
   var laptop1 = new Laptop("hp","16GB","$2000","i5");
   var laptop2 = new Laptop("dell","8GB","$1500","i3");
   console.log(laptop1.brandName)
   console.log(laptop2.RAM)

   let Car = function(doors,wheels,modelName,Year){
       this.doors = doors;
       this.wheels = wheels;
       this.modelName = modelName;
       this.Year = Year;
   }
   var car1 = new Car(5,4,"Toyota",2015);
   var car2 = new Car(5,4,"suzuki",2019);
console.log(car1.modelName)
console.log(car2.Year)

let Livingroom = function(sofas,table,curtains,television){
    this.sofas = sofas;
    this.table = table;
    this.curtains = curtains;
    this.television = television;
}
var livingroom1 = new Livingroom(3,1,"yes","smart");
var livingroom2 = new Livingroom(4,1,"yes","smart");
console.log(livingroom1.curtains)
console.log(livingroom2.television)
