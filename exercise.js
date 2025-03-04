class Animal {
    constructor(color, energia) {
        this.color = color
        this.energia = energia
    }
    isActive() {
        if(this.energia > 0) {
            this.energia -= 20
            console.log(this.energia);    
        }else{
            return this.sleep()
        }
    }
    sleep() {
        this.energia += 20
        console.log (this.energia)
    }
    getColor() {
        return this.color
    }
}

class Gato extends Animal {
    constructor(sound, catJumpingHigh, canClimbTree){
        super(color, energia)
        this.sound = sound
        this.catJumpingHigh = catJumpingHigh
        this.canClimbTree = canClimbTree
    }
    makeSound() {
        console.log(this.sound);
    }
}

class Pajaro extends Animal {
    constructor(sound, canFly) {
        super(color, energia)
        this.sound = sound
        this.canFly = canFly
    }
    makeSound() {
        console.log(this.sound);
    }
}

class GatoDomestico extends Gato {
    constructor(houseCatSound) {
        super(sound, catJumpingHigh, canClimbTree)
        this.houseCatSound = houseCatSound
    }

    makeSound(option){
        if(option) {
            super.makeSound()
        }
        console.log(this.houseCatSound)
    }
}

class LoroTigre extends Pajaro{
    constructor() {}
}