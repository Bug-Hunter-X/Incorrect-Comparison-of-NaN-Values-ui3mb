function compare(a, b) {
  if (a === b) {
    return 0; 
  } else if (a > b) {
    return 1; 
  } else {
    return -1; 
  }
}

console.log(compare(NaN, NaN)); //Outputs 1, which is incorrect. NaN should not be greater than itself.