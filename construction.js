// Function constructor
function Person(name){
    this.name = name
    this.getName = function(){
        return this.name
    } 
}

let object1 = new Person("Bob");
console.log(object1.getName());




// Literal constructor
var object2 = { 
    name : "Bob",
    getName : function (){
     return this.name
    } 
} 

console.log(object2.getName());





// object constructor
var object3 = new Object();

object3.name = "Anand",
object3.getName = function(){
  return this.name ; 
};

console.log(object3.getName());





// prototyping
function Animal() {}
Animal.prototype.name = 'Rex';
Animal.prototype.getName = function() {
    return this.name;
}

let object4 = new Animal();
console.log(object4.getName())
