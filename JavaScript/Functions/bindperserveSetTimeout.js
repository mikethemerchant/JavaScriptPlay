
// preserve the this.
const player = {
    name: "tordack",
    class: "warrior",
    display: function () {
        console.log(`Name:${this.name} Class:${this.class}`);
        }
    }

setTimeout(player.display,2000); // add bind

// chatgpt also figured this out...
setTimeout(player.display.bind(player),3000); 

// and rewrote it with arrow function
  setTimeout(() => console.log("generated"),3500);
  setTimeout(() => player.display(), 4000);
  

  console.log("werd");

  


  
  