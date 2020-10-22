// Is Unique

// Assumptions:
// - Characters are all ASCII (128 character alphabet)

// Time Complexity: N
// Space Complexity: 1

// Alternate Approaches:
// - Could brute force and just compare each character to every other character

const isUnique = (string) => {
  // Check if there are too many characters in the string
  if (string.length > 128) {
    return false
  }
  // Create booleans for each character
  characterBooleans = new Array(128).fill(false)
  // Loop through each character
  for (let i = 0; i < string.length; i++) {
    // Convert character to ASCII code, check if it has been found already
    if (characterBooleans[string.charCodeAt(i)]) {
      return false
      // Mark off characters that have been found
    } else {
      characterBooleans[string.charCodeAt(i)] = true
    }
  }
  // If the loop has been completed without returning false, it is a unique stream
  return true
}

// Test Cases:
console.log(isUnique('123456sdf789'))
