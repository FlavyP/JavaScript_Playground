var dog = {
  sound: 'woof',
  talk: function() {
    console.log(this.sound)
  }
}

//Directly calling the talk method on the dog object
dog.talk();

//New variable with the talk method
var talkFunc = dog.talk
talkFunc()

//New variable binding dog and the previously created var
var boundFunc = talkFunc.bind(dog)
boundFunc()

console.log("-----------------------------")

//Constructors and objects

function Employee() {
  this.name = '';
  this.dept = 'general'
}

function Manager() {
  Employee.call(this)
  this.reports = []
}
Manager.prototype = Object.create(Employee.prototype)

var emp = new Employee()
emp.name = 'Mike'
var manager = new Manager()
manager.name = 'Johnny'
console.log(emp)
console.log(manager)

console.log("-----------------------------")

class Animal {
  constructor(sound) {
    this.sound = sound
  }

  printSound() {
    console.log(this.sound);
  }
}

class Dog extends Animal {
  constructor(breed) {
    super('woff')
    this.breed = breed
  }
  printBreed() {
    console.log(this.breed)
  }
}

var animal = new Animal('meow');
animal.printSound()

var dog = new Dog('german shepard');
dog.printSound()
dog.printBreed()

var dogSound = Dog.prototype.printSound.bind({sound:'roar'})
dogSound()
dog.printSound()
