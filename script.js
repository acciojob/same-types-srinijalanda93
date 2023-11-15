function isSameType(value1, value2) {
  // Check if both values are NaN
  if (isNaN(value1) && isNaN(value2)) {
    return true;
  }

  // Check if the types are the same
  return typeof value1 === typeof value2;
}

// Example usage with user input through prompts
let value1 = prompt("Enter the first value:");
let value2 = prompt("Enter the second value:");

// Convert input to numbers if applicable
value1 = isNaN(value1) ? value1 : parseFloat(value1);
value2 = isNaN(value2) ? value2 : parseFloat(value2);

alert(isSameType(value1, value2));
