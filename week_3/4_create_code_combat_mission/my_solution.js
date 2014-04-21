// I worked [by myself, with:] on this challenge

// Your mission description:
// Lure Ogre into cell and trap them.
// Start outside the cell, run into the cell and taunt the Ogre, run around the cell,
// leave the cell before Ogre attacks and lock the cell behind you.

// Pseudocode
// create character
// provide first movement into cell
// instruct user to taunt Ogre
// instruct user to move around the perimeter of the cell
// instruct the user to leave the cell
// instruct the user to lock the door
//

// Initial Code

// Create character

var wizard = {
  name: "Gandalf",
  x_pos: 50,
  y_pos: 50
}

// Create taunt functions

var taunt=function(taunt) {
  prompt("Type your taunt here", taunt);
}

// Create movement functions
var moveUp = function() {
  this.y_pos ++ 10;
}

var moveDown = function(){
  this.y_pos -- 10;
}

var moveRight = function(){
  this.x_pos ++ 10;
}

var moveLeft = function(){
  this.x_pos -- 10;
}

// Create lock function

var lock = function(command) {
  console.log(command);
}

// Alert user

alert("Trap the Ogre in the cell!");

// provide first movement into cell

wizard.moveUp();

// instruct user to taunt Ogre

alert("Taunt the Ogre to lure him into the cell!");
// Solution
wizard.taunt();

// instruct user to move around the perimeter of the cell

alert("Run away from the Ogre");
// Solution
wizard.moveRight();
wizard.moveUp();
wizard.moveLeft();
wizard.moveLeft();
wizard.moveDown();
wizard.moveRight();

// instruct the user to leave the cell

alert("Get out of there!");
// Solution
wizard.moveDown();

// instruct the user to lock the door

alert("Now lock him in there!");
// Solution
wizard.lockDoor();

// mission complete!
alert("Congratulations, you trapped the ogre in the cell!");


// Refactored Code

// We were going to use a switch statement for movement but decided that individual functions were easier.
// We decided that the taunt function was fine
// Added functionality if the ogre catches the wizard.

// Create characters - added Ogre character

var wizard = {
  name: "Gandalf",
  x_pos: 50,
  y_pos: 50,
  alive: true
}

var ogre = {
  name:"Ogre",
  x_pos:20,
  y_pos:20
}

// Create taunt functions

var taunt=function(taunt) {
  prompt("Type your taunt here", taunt);
}

// Create movement functions
var moveUp = function() {
  this.y_pos ++ 10;
}

var moveDown = function(){
  this.y_pos -- 10;
}

var moveRight = function(){
  this.x_pos ++ 10;
}

var moveLeft = function(){
  this.x_pos -- 10;
}

// Create lock function

var lockDoor = function(command) {
  console.log(command);
}

// Create attack function

var attack = function() {
  console.log("Ogre caught you and ripped you apart!")
}

if (ogre.x_pos === wizard.x_pos && ogre.y_pos === wizard.y_pos) {
  ogre.attack();
  wizard.alive=false;
}

// Begin mission

// Alert user

alert("Trap the Ogre in the cell!");

// provide first movement into cell

wizard.moveUp();

// instruct user to taunt Ogre

alert("Taunt the Ogre to lure him into the cell!");
// Solution
wizard.taunt();

// instruct user to move around the perimeter of the cell

alert("Run away from the Ogre");
// Solution
wizard.moveRight();
wizard.moveUp();
wizard.moveLeft();
wizard.moveLeft();
wizard.moveDown();
wizard.moveRight();

// instruct the user to leave the cell

alert("Get out of there!");
// Solution
wizard.moveDown();

// instruct the user to lock the door

alert("Now lock him in there!");
// Solution
wizard.lockDoor();

// mission complete!
alert("Congratulations, you trapped the ogre in the cell!");



// Reflection
// This exercise was a little confusing at first but Amol and I tackled it and I think it turned out pretty good.
// I definitely learned that I needed to work on pseudocoding more often. Hopefully our codecombat mission is as clear
// to someone else as it was to us. This was a fun exercise overall. I enjoy working with Amol, I think we work well
// together.
// 
// 
// 
// 

