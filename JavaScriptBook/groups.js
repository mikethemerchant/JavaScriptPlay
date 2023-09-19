class Group {
    constructor () {
        this.index = 0;
        this.list = [];
    }

    add (value) {
        this.list.push(value);
    }
    delete(value) {
        this.list = this.list.filter(v => v != value);
    }
    display () {
        console.log(this.list);
    }

    has(value) {
        for(g of this.list) {
            if(g === value) {
                return true;
            }
        }
        return false;
    }

    [Symbol.iterator]() {
        return new GroupIterator(this);
    }


    // static from(newGroup) {

    // }
}

class GroupIterator {
    constructor(group) {
        this.group = group;
        this.index = 0;
    }

    next() {
        
        if (this.index >= this.group.list.length) {
            return {done: true};
        } else {
            let value = {value: this.group.list[this.index]}
            this.index++;
            return value;
        }
    }
}

let g = new Group();
g.add('mike');
g.add('bob');
g.add('ashley');
g.add('roy');

g.display();

for(let v of g) {
    console.log(v);
}

