const obj = {
    count : 0
};

Object.defineProperty(obj, "reset", {
    get : function () {this.count = 0}
});

Object.defineProperty(obj, "increment", {
    get : function () {this.count++;}
});

Object.defineProperty(obj, "decrement", {
    get : function () {this.count--;}
});

Object.defineProperty(obj, "add", {
    set : function (value) {this.count += value;}
});

Object.defineProperty(obj, "subtract", {
    set : function (value) {this.count -= value;}
});

obj.count = 5;

console.log(obj.count);
obj.increment;
console.log(obj.count);
obj.decrement;
console.log(obj.count);
obj.add = 3;
console.log(obj.count);
obj.subtract = 4;
console.log(obj.count);
obj.reset;
console.log(obj.count);
