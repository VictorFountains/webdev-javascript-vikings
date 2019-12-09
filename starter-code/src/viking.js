// Soldier
class Soldier {
   constructor(health, strength){ 
    this.health = health;
    this.strength = strength;
}
    attack(){
        return this.strength
    }
    receiveDamage(theDamage){   
        this.health -= theDamage
    }
}
// Viking
class Viking extends Soldier {
    constructor(name,health, strength){
        super(name,health,strength);
        this.name = name;
        this.health = health;
        this.strength = strength;
    }
    receiveDamage(theDamage){
        theDamage = 50
        this.health -= theDamage
        if (this.health > 0){
        return (this.name + " has received" + theDamage + "points of damage");
        }
        else if (this.health < 0)
        return (this.name 
    }  
}

// Saxon
class Saxon {}

// War
class War {}
