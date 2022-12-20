// up to this point just created static fixed objects.

function Player (first, last, level, classType) {
    this.firstName = first;
    this.lastName = last;
    this.classLevel = level;
    this.classType = classType;
    this.nameLevel = function() {
        return this.firstName + ":" + this.classLevel;
    }
    this.levelUp = function (value) {
        
    }
}

const mike = new Player("Tordack","Blackrock",5,"warrior");

console.log(mike.firstName);

// add a property to object easy object.property = "blah";
mike.role = "king";
console.log(mike.role);

mike.name = function () {
    return this.firstName + " " + this.lastName;
};

console.log(mike.name()); // got to put the () on it to make it run function;

// better way is just to add to the constructor.
console.log(mike.nameLevel());