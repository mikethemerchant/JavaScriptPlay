// my version
function countString(toFind,toCountString) {
    const foundLetters = new Map();
    let pos = 0;
    for(const s of toCountString) {
        if(s == toFind) {
            foundLetters.set(pos,s);
        }
        pos++;
    }
    return foundLetters;
}

let whatItFound = countString("e","letsBthebestwecanBplease")

for(const w of whatItFound) {
    console.log(`string:${w[1]} @pos:${w[0]}`);
}

// write a function that accepts two strings. One string is the search string. The other string is what will be searched. Then have it return a list of the postions it was found.
// chatgpt version:
function findOccurrences(searchString, targetString) {
    let positions = [];
    let searchLength = searchString.length;
    for (let i = 0; i < targetString.length - searchLength + 1; i++) {
      if (targetString.substring(i, i + searchLength) === searchString) {
        positions.push(i);
      }
    }
    return positions;
  }
  

  let searchString = "e";
  let targetString = "letsBthebestwecanBplease";
  
  let positions = findOccurrences(searchString, targetString);
  console.log(positions);


  //book version
  function countChar(string, ch) {
    let counted = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] == ch) {
        counted += 1;
      }
    }
    return counted;
  }
  
  function countBs(string) {
    return countChar(string, "B");
  }
  
  console.log(countBs("letsBthebestwecanBplease"));

  console.log(countChar("letsBthebestwecanBplease", "e"));
