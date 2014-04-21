// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Kirstin "Kir" Jarchow
//  2. Kendall Carey


// 1. "YOU SIGNED... WHO?!"
// http://www.w3schools.com/js/js_objects.asp

var tennant = {
    name: "David Tennant",
    age: 42,
    quote: "Sorry, so sorry"
};

// 2. "Here they Come!"
var clients = new Object();
// clients = { }
clients.sandler = {
    name: "Adam Sandler",
    age: 47,
    quote: "That's your home! Are you too good for your home?!"
};

clients.bell= {
  name: "Kristen Bell",
  age: 33,
  quote: "Do you want to build a snowman?"
};

clients.carrey = {
    name: "Jim Carrey",
    age: 52,
    quote:  "...So you're telling me there's a chance? YEAH!"
};

clients.tennant = tennant;

// 3. "TIME IS MONEY!"

function Client(name, age, quote){
  this.name = name;
  this.age = age;
  this.quote = quote;
}

// Client.prototype.method1 = function(arg){
//   do stuff
// }

// class Client
//   def initialize(name, age, quote)
//     @name = name
//     @age = age
//     @quote = quote
//   end
  
//   def method1(arg)
//     do stuff
//   end
// end

//YOUR CODE HERE!

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";

clients.shooterMcGavin =shooterMcGavin;

// >clients
// { sandler: 
//   { name: 'Adam Sandler',
//     age: 47,
//     quote: 'That\'s your home! Are you too good for your home?!' },
//   bell: 
//   { name: 'Kristen Bell',
//     age: 33,
//     quote: 'Do you want to build a snowman?' },
//   carrey: 
//   { name: 'Jim Carrey',
//     age: 52,
//     quote: '...So you\'re telling me there\'s a chance? YEAH!' },
//   tennant: 
//   { name: 'David Tennant',
//     age: 42,
//     quote: 'Sorry, so sorry' },
//   shooterMcGavin: 
//   { name: 'Shooter McGavin',
//     age: 48,
//     quote: 'Just stay out of my way... or you\'ll pay. Listen to what I say.' } }

// 4. "SHOW 'EM OFF!"

// loop through object javascript
  for(var client in clients){
    console.log(clients[client].name)
    console.log(clients[client].age)
    console.log(clients[client].quote)
  }

// Adam Sandler
// 47
// That's your home! Are you too good for your home?!
// Kristen Bell
// 33
// Do you want to build a snowman?
// Jim Carrey
// 52
// ...So you're telling me there's a chance? YEAH!
// David Tennant
// 42
// Sorry, so sorry
// Shooter McGavin
// 48
// Just stay out of my way... or you'll pay. Listen to what I say.

// ** BONUS **


//  Your Reflection:
//This was tough because I couldn't remember much JavaScript and I kept thinking of Ruby methods. Thank goodness
//Kirstin remembered a lot and we were able to finish this challenge with time left over but I felt like
//deadweight. This was definitely motivational though.
