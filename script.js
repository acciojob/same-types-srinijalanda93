function isSameType(value1, value2) {
    // Check if both values are NaN
    if (isNaN(value1) && isNaN(value2)) {
        return true;
    }

    // Check if the types are the same
    return typeof value1 === typeof value2;
}

// Example usage with user input
let userInput1 = prompt("Enter Start of the Range.");
let userInput2 = prompt("Enter End Of the Range.");

// Convert the user inputs to the appropriate data types
let value1 = parseFloat(userInput1); // Assuming these are numbers
let value2 = parseFloat(userInput2);

// Check and alert the result
alert(isSameType(value1, value2));
