class Card {
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, res, power){
        super(name, cost);
        this.power = power;
        this.res = res;
    }

    attack(target){
        if( target instanceof Unit){
            target.res -= this.power;
            console.log(this.name + " attacked " + target.name + " for " + this.power +" health.");
        } else {
            throw new Error("target must be a unit!");
        }
    }

}

class Effect extends Card {
    constructor(name, cost, text, stat, mag){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.mag = mag;
    }

    play(target){
        if(target instanceof Unit){
                if(this.stat === "resilience"){
                    target.res += this.mag;
                    console.log(this.text);
                }
                if(this.stat === "power"){
                    target.power += this.mag;
                    console.log(this.text);
                }
        } else {
            throw new Error( "target must be a unit!");
        }
    }
}

let redNinja = new Unit("Red Belt Ninja", 3, 4, 3);
let blackNinja = new Unit("Black Belt Ninja", 4, 4, 5);
let hardAlgo = new Effect("Hard Algorithm", 2, "increase target res by 3", "resilience", +3);
let unhandled = new Effect("Unhandled Promise Rejection", 1, "reduce target res by 2", "resilience", -2);
let pairProgram = new Effect("Pair Programming", 3, "increase target power by 2", "power", +2);

hardAlgo.play(redNinja);
unhandled.play(redNinja);
pairProgram.play(redNinja);
redNinja.attack(blackNinja);