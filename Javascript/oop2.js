// define a class called car
car = {
};
console.log(typeof(car));

//The class is "car"the properties follow(wheels,doors,modelname etc)
//the values to the properties of a class is hat we call objects.
car = {
    "wheels": 4,
    "doors": 5,
    "modelName":"Toyota",
    "Year":2010,
};
console.log(typeof(car));

//if you want to access the property of the class, we use the .(dot) operator
let food = {
name : "cassava",
price : 1000,
location : "siryamuwongo",
owner : "Doreen"
}
food.name = "matooke"
console.log(food.name)
console.log(food.location)
console.log(food)

//console is q class and log is a method/function that writes on the console
console.log(typeof(food.name))

let laptop ={
    name : "hp",
    price : 250000,
    intel : "i5",
    RAM : "8GB",
    owner : "steven",
};
laptop.price = 150000
console.log(laptop.price)
console.log(laptop.intel)
console.log(laptop.RAM)
console.log(typeof(laptop.owner))

let student = {
    name : "Martin",
    school : "CIU",
    gender : "female",
    course : "catalyst"
};
student.name = "doreen",
console.log(student.school)
console.log(student.course)
console.log(student.name)


//a method is a group of statements that describes whata an object does to itself or to others
//the statement found in the method of a class is called a behavior (cosole.log)
let person = {
    name : "Gertrude",
    age : 30,
    residence : "masaka",
    greet : function(){
        return "hey rudegyal"
    }
}
console.log(person.greet())

var employee = {
    position : "managing director",
    name : "doreen",
    department : "ICT",
    age : 20,
    salary : "$3500",
    marriage : function(){
        return "false"
    },
    greet : function(){
        return "baby boss"
    }
}
console.log(employee.marriage())
console.log(employee.greet())

var employer = {
    name : "sheila",
    position : "Ass director",
    age : 20,
    worth : "£3500",
    marriage : function(){
        return "married"
    },
    greet : function(){
        return "how ya"
    }
}
console.log(employer.marriage())
console.log(employer.greet())