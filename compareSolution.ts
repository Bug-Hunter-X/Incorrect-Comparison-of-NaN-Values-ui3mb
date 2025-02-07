function compare(a, b) {
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return NaN; // Or handle NaN as needed
  } else if (a === b) {
    return 0; 
  } else if (a > b) {
    return 1; 
  } else {
    return -1; 
  }
}

console.log(compare(NaN, NaN)); //Outputs NaN
console.log(compare(1,1)); //Outputs 0
console.log(compare(2,1)); //Outputs 1
console.log(compare(1,2)); //Outputs -1