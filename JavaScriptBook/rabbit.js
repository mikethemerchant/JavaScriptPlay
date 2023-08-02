class Rabbit {
    constructor(type) {
        this.type = type;
    }
    
    teeth = 'small';

    speak(line) {
        console.log(`the ${this.type} rabbit says ${line} and I have ${this.teeth} teeth`);
    }
}

let killerRabbit = new Rabbit('killer');
let whiteRabbit = new Rabbit('white');

whiteRabbit.teeth = 'long';

killerRabbit.speak('i eat people');
whiteRabbit.speak('i mess with people');