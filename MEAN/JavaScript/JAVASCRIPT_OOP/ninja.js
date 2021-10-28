function Ninja(name){
    this.name = name
    this.health = 100
    var speed = 3;
    var strength = 3;

    this.showStats = function(){
        console.log(`Stats:\n\tName: ${this.name}\n\tStrength: ${strength}\n\tSpeed: ${speed}\n\tHealth: ${this.health} `)
    }
}

Ninja.prototype.sayName = function(){
    console.log(`My name is ${this.name}`)
}

Ninja.prototype.drinkSake = function(){
    this.health+=10;
}


var angelo = new Ninja("Angelo")
var miko = new Ninja("Niko")
angelo.sayName()
miko.sayName()
angelo.showStats()
angelo.drinkSake();
angelo.showStats()
