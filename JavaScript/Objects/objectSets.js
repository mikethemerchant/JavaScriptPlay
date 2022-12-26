const players = new Set();

console.log(players.size);

const mike = {
    name: "mike",
    level: 5
};

players.add(mike);
players.add({ name: "vince", level:8});

players.forEach(value => console.log(value.name));

console.log(players.size);

const keys = players.values();

for (x of keys) {
    console.log(x);
}

players.forEach(value => {
    if (value.name == "vince")
        players.delete(value);
});

players.forEach(value => console.log(value.name));

console.log(players.has(mike));


const set1 = new Set();
set1.add(42);
set1.add('forty two');

const iterator1 = set1.values();

console.log(iterator1.next().value);
console.log(iterator1.next().value);


for (i of iterator1)
    console.log(i.value);

