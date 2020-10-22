// URLify

// Assumptions:
// - Whitespace at the end of the string can be chompt off
// - Multiple whitespaces can be replaced by a single one
// - True length provided includes the spaces between words

// Time Complexity: N
// Space Complexity: N

// Alternate Approaches:
// - Could have steped through the input backwards and not started pushing until first character was seen instead of using the trueLenght comparision

const URLify = (input: string, trueLength: number): string => {
  // Create blank array for url ((length - 1) due to 0 start index of arrays))
  const url: string[] = new Array(trueLength - 1)
  // Initialize url index and whitepsace flag
  let i = 0
  let whitespace = false
  // Step through the input string and transfer them into the url
  for (let j = 0; i < input.length; j++) {
    // Break out of loop if true length is exceeded to cuttoff whitespace at the end
    if (i >= trueLength) {
      break
    }
    // Check if current character is whitespace, if not add it to the url and increment index
    if (input.charAt(j) != ' ') {
      url[i] = input.charAt(j)
      i++
      // Reset the whitespace flag
      whitespace = false
    } else {
      // If the character is whitespace, check the whitespace flag to ensure it is the first space
      if (!whitespace) {
        url[i] = '%20'
        i++
        whitespace = true
      }
    }
  }
  // Join url array and return result
  return url.join('')
}

// Test Cases:
console.log(URLify('Mr John    Smith     ', 13)) // 'Mr%20John%20Smith'
