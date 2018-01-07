
var triple = function(x) {
  return x * 3;
}

var tripleVar = triple
console.log("Triple of 30 = ", tripleVar(30))

///FILTER

var animals =[
  { name: 'Johnny', species: 'dog'},
  { name: 'Miki', species: 'rabbit'},
  { name: 'Tiky', species: 'dog'},
  { name: 'Goldy', species: 'fish'},
  { name: 'Jimmy', species: 'cat'}
]

var dogs = animals.filter(function(animal) {
  return animal.species === 'dog'
})
console.log("Dogs, using filter = ", dogs)

var dogsLoop = []
for(var i = 0; i < animals.length; i++) {
  if(animals[i].species === 'dog')
    dogsLoop.push(animals[i])
}
console.log("Dogs, using loop = ", dogsLoop);

//MAP

var animalNames = animals.map(function(animal) {
  return animal.name;
})
console.log("Animal names using map = ", animalNames)

var animalNamesLoop = []
for(var i = 0; i < animals.length; i++) {
  animalNamesLoop.push(animals[i].name)
}
console.log("Animal names using loop = ", animalNamesLoop)

var names = animals.map((animal) => animal.name)
console.log("Arrow function", names)

//REDUCE

var orders = [
  { amount: 100 },
  {amount: 150 },
  {amount: 250 },
  {amount: 350 },
  {amount: 475 }
]

var total = 0;
for(var i = 0; i < orders.length; i++) {
  total += orders[i].amount;
}
console.log("Total with loop = ", total)

var totalAmount = orders.reduce(function(sum, order) {
  return sum += order.amount
}, 0)
console.log("Total with reduce = ", totalAmount)

//CURRYING
var greetCurried = function(greeting) {
  return function(name) {
    console.log(greeting + ", " + name);
  };
};

var greetHello = greetCurried("Hello")
greetHello("Heidi")
var greetGoodbye = greetCurried("Goodbye")
greetGoodbye("Heidi")
greetCurried("Hi")("Heidi")
