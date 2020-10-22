// URLify
// Assumptions:
// - Whitespace at the end of the string can be chompt off
// - Multiple whitespaces can be replaced by a single one
// - True length provided includes the spaces between words
// Time Complexity:
// Space Complexity:
// Alternate Approaches:
var URLify = function (input, trueLength) {
    // Create blank array for url ((length - 1) due to 0 start index of arrays))
    var url = new Array(trueLength - 1);
    // Initialize url index and whitepsace flag
    var i = 0;
    var whitespace = false;
    // Step through the input string and transfer them into the url
    for (var j = 0; i < input.length; j++) {
        // Break out of loop if true length is exceeded to cuttoff whitespace at the end
        if (i >= trueLength) {
            break;
        }
        // Check if current character is whitespace, if not add it to the url and increment index
        if (input.charAt(j) != ' ') {
            url[i] = input.charAt(j);
            i++;
            // Reset the whitespace flag
            whitespace = false;
        }
        else {
            // If the character is whitespace, check the whitespace flag to ensure it is the first space
            if (!whitespace) {
                url[i] = '%20';
                i++;
                whitespace = true;
            }
        }
    }
    // Join url array and return result
    return url.join('');
};
// Test Cases:
console.log(URLify('Mr John    Smith     ', 13)); // 'Mr%20John%20Smith'
