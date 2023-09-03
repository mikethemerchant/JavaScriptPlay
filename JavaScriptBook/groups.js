class Group {
    constructor () {
        this.group = [];
    }
    add (value) {
        this.group.push(value);
    }
    delete(value) {
        this.group = this.group.filter(v => v != value);
    }

    display () {
        console.log(this.group);
    }

    has(value) {
        for(g of this.group) {
            if(g === value) {
                return true;
            }
        }
        return false;
    }

    // static from(newGroup) {

    // }
}

let g = new Group();
g.add('mike');
g.add('bob');

g.display();

g.delete('mike');
g.add('roy');

g.display();
console.log(g.has('ashley'));