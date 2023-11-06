// I need to understand setTimeout and clear interval better.
console.log("Do it."); 

const werd1 = setInterval(() => console.log("werd 1"),1000);
const werd2 = setInterval(() => console.log("werd 2"),1000);

const clear1 = setInterval(() => clearInterval(werd1),5000);
const clear2 = setInterval(() => clearInterval(werd2),10000);


