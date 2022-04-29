// MISSION 01
// Move towards the gem.
// Don’ t touch the spikes!
//Type your code below and click Run when you’ re done.

hero.moveRight()
hero.moveDown()
hero.moveRight()

// MISSION 02
// Grab all the gems using your movement commands.
hero.moveRight()
hero.moveDown()
hero.moveUp()
hero.moveUp()
hero.moveRight()

// MISSION 03
// Avoid being seen by the ogre.Collect all the gems.
hero.moveRight()
hero.moveUp()
hero.moveRight()
hero.moveDown()
hero.moveRight()

// MISSION 04
// Use arguments with move statements to move farther.
hero.moveRight(3);
hero.moveUp(1);
hero.moveRight(1);
hero.moveDown(3);
hero.moveRight(4);

// MISSION 05
// Defend against "Brak" and "Treg"!
// You must attack small ogres twice.

hero.moveRight(1);
hero.attack("Brak");
hero.attack("Brak");
hero.moveRight(1);
hero.attack("Treg");
hero.attack("Treg");
hero.moveRight(2);