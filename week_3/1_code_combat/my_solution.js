// I worked on this challenge by myself.
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 

//Rescue Mission
// the level where you attack the munchkin and lead Tharin away from the deadend
this.moveDown(); //move down x 2
this.moveDown();
this.moveRight(); //move right 1x
this.moveUp(); //move up x2
this.moveUp();
this.moveRight(); //move right x 2
this.moveRight();
this.moveDown(); //move down 1x
this.attackNearbyEnemy(); //ATTACK!


//Grab the Mushroom
//the level where Tharin needs to get the mushroom to be able to defeat the Ogre
this.moveUp(); //move up 1x
this.moveRight();  //move right 1x, eat mushroom
this.moveLeft(); //move left 1x
this.moveUp(); //move up 1x
this.attackNearbyEnemy(); //ATTACK!


//Drink Me
//the level where you have to kill 2 munchkins and drink a health potion in between
this.moveRight(); //move right 1x
this.attackNearbyEnemy(); //ATTACK!
this.moveRight(); //move right 1x
this.moveDown(); //move down 1x, drink potion
this.moveUp(); //move up 1x
this.moveRight(); //move right 1x
this.attackNearbyEnemy(); //ATTACK AGAIN!


//Taunt the Guards
//the level where you rescue Tharin's ally, Phoebe
this.moveRight(); //move right 1x
this.bustDownDoor(); //like it says, bust door down
// Delete the "//" in front of each line below.
this.moveRight(); //move right 1x
this.say("Hey there!"); //taunt the guard
this.moveLeft();//move left 2x
this.moveLeft();
this.say("Attack!"); //ATTACK!
// Now get Phoebe to follow through the dungeon.
this.moveRight(); //move right 1x
this.say("Follow me."); //let Phoebe know that she needs to follow you
this.moveRight(); //move right x2
this.moveRight();
this.moveUp(); //move up x1
this.moveRight(); //move right 1x
this.say("Run for it!"); //scream something so that the munchkin will chase you and you can manouver around it
this.moveDown(); //move down 1x
this.moveRight(); //move right 1x
this.moveUp(); //move up 1x
this.moveRight(); //move right 1x and escape


//It's a trap
//the level where you trick the Ogre into coming into view of the archers
// Taunt the Ogre and run for cover'
this.moveDown(); //move down x2
this.moveDown();
this.say("Boo!"); //taunt guard
this.moveUp(); //move up x2 so your friends can kill the Ogre
this.moveUp();

//Break the Prison
//the level where you help Tharin's allies break out of prison
// Write this isFriend(name) spell to tell friend from foe.
// Return true for friends' names, false for ogres' names.
if(name === "William") //if your friend replies William, than it is true that he is a friend
    return true;
if(name === "Krogg") //Krogg is not a friend so it is false
    return false;  // <-- Start here; Krogg is not a friend!
if(name === "Lucas") //Lucas is a friend
return true;
if(name === "brack") //Brack is not
return false;
if(name === "Marcus") // Marcus is a friend but MARCUS is not
return true;
if(name === "Gordon") //Gordon is a friend
return true;



//Taunt
//where you taunt the ogre four times and trick him into coming into range of Phoebe
this.say("Hey!"); //scream hey
// Lure the ogre right into your arrow trap
// by saying a few more things at him.
// Anything works!
this.say("ugly!"); //scream another insult
this.say("crazy!"); //scream another insult
this.say("Freak!"); //scream another insult


//Cowardly Taunt
//where you use x and y coordinates to move on the field and taunt Ogres into coming into range of the archers
this.moveXY(50, 16); //these are the example coordinates
this.moveXY(63, 20); //more examples
this.moveXY(70, 10);  // This is a safe spot.
this.say("I can lure them in here."); //example speech
// Run your soldier out where the ogres can hear you.
this.moveXY(54,32); //move out close enough to the Ogres so they can hear you but far enough away to escape
// Say something!
this.say("Creeps!"); //insult Ogres
// Then run back behind the arrow towers for safety.
this.moveXY(68,10); //moving back to the safe spot
// You can shift+click on the map to insert coordinates.


//Commanding Followers
//Where you convince your friends into following you and helping you attack the munchkins and ogres
this.moveXY(49, 66); // moving to your friends
this.moveXY(60, 63);
this.moveXY(75, 63);
this.say("Hail, friends!"); //getting their attention
// Saying anything with "follow" in it will get nearby soldiers
// to follow you
this.say("Follow me onwards, brethren!"); //using 'follow' so that the allies will follow Tharin
this.moveXY(60,40); //moving close enough to the Ogres
// Saying anything with "attack" will send nearby troops into
// a battle mode.
this.say("Attack the enemy!"); //ordering an attack from the allies
// Make sure Tharin is safe!


//Mobile Artillery
//where you have to move the cannon in range of the munchkins and ogres but becareful to not be too close.
//you move around and aim using x and y coordinates
this.moveXY(30, 26);  // Move into range
this.attackXY(46, 5);  // Shoot once in the middle of the ogres
// If they survive a hit, ogres retaliate!
// Larger ogres take more than one hit...
// So, position and aim carefully.
this.moveXY(55,35); //moving close enough to one group of ogres
this.attackXY(67,55); //shooting the canon twice to make sure that you kill the big ogre
this.attackXY(63,45);
this.moveXY(40,43); //moving to the second group
this.attackXY(49,66); //shooting twice so the big ogre dies, making sure that your shot hits the moving big ogre
this.attackXY(50,50);

//Reflection
//This was fun! I thoroughly enjoyed this exercise. Simple but fun. I may have gotten a bit descriptive with my psuedocode
//I felt like the Break the Prison was most difficult exercise but still not too bad. I thought it was interesting
//that you could put the amount of times you need to move within the parenthesis (example: this.moveDown(2) ). It
//doesn't work that way and I found out why when I did more research (see below). I thought the game was well done.
//I thought that the pseudocode was a little tedious.
 
 
 //Questions answered
//  What is 'this' referring to? Think programming-wise rather than in the terms of the game.
// 'This' apparently used to only refer to an object but with recent updates it can have any value specifically 
//in functions. It is never static.
// What does the () do in JavaScript?
// They call the function and can also add parameters to function brackets. They are not always empty but always 
//necessary.
// What is the point of the semicolons?
// Semicolons in JavaScript are used to separate statements. Sometimes they are optional but always a good habit. 
//They are required when two statements are on one line. You don't use semicolons after curly brackets (of course there are exceptions such as assignment statements).

 
 
 
 
 
// Reflection:
// Write your reflection here.
