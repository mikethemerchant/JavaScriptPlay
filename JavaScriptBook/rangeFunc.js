function range(start, end, step) {
    const result = [];
    if (step === undefined) {
      step = end > start ? 1 : -1;
    }
    if (step > 0) {
      for (let i = start; i <= end; i += step) {
        result.push(i);
      }
    } else {
      for (let i = start; i >= end; i += step) {
        result.push(i);
      }
    }
    return result;
  }
  
  function sum(array) {
    let total = 0;
    for (const element of array) {
      total += element;
    }
    return total;
  }

console.log(range(1, 10)); 
console.log(range(1, 10, 2)); 
console.log(range(10, 1, -1)); 
console.log(range(10, 1)); 

console.log(sum(range(1, 10))); 