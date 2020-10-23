// String Compression
// Assumptions:
// - String contains only upercase and lowercase letters
// Time Complexity: N
// Space Complexity: N (output could be just as long as input)
// Alternate Approaches:
// - Implement a method to calculate output length before creating it to save time/space
// - Several discussed in the cracking the coding interview
var stringCompression = function (input) {
    // Check for minimum length of string (ie: aa => a2, therefore return aa)
    if (input.length <= 2) {
        return input;
    }
    // Initialize outputs, pointers, and count
    var output = [];
    var index1 = 0;
    var index2 = 1;
    var count = 1;
    while (index2 < input.length + 1) {
        // If pointers look at the same characters
        if (input.charAt(index1) !== input.charAt(index2)) {
            // Push current character
            output.push(input.charAt(index1));
            // Push current count if greater than 1
            if (count > 1) {
                output.push(count.toString());
            }
            // Update pointers and reset counte
            index1 = index2;
            index2++;
            count = 1;
            // If pointers look at the same character, increment index2 and count
        }
        else {
            index2++;
            count++;
        }
    }
    // Compare input and output and then return the shortest
    if (output.length >= input.length) {
        return input;
    }
    else {
        return output.join('');
    }
};
// Test Cases:
console.log(stringCompression('abcde'));
console.log(stringCompression('abbcc'));
console.log(stringCompression('abbbbbcccc'));
console.log(stringCompression('aabcccccaaa'));
