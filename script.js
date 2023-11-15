function isSameType(value1, value2) {
    // Check if both values are NaN
    if (isNaN(value1) && isNaN(value2)) {
        return true;
    }

    // Check if the types are the same
    if (typeof value1 !== typeof value2) {
        return false;
    }

    // Check if both values are strings
    if (typeof value1 === 'string' && typeof value2 === 'string') {
        // Use strict equality to compare strings
        return value1 === value2;
    }

    // For other types, return true
    return true;
}

// Example usage without user input
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");

// Convert the user inputs to the appropriate data types
// Assuming these are numbers
value1 = parseFloat(value1);
value2 = parseFloat(value2);

// Check and alert the result
alert(isSameType(value1, value2));
