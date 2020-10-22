// Palindrome Permutation

// Assumptions:
// - Characters are all ASCII (128 character alphabet)
// - Not limited to real words
// - Ignore casing and non-letter characters

// Time Complexity:
// Space Complexity:

// Alternate Approaches:
// - Could have used a hash instead

function palindromePermutation(input) {
  // Create booleans for each character
  characters = new Array(128).fill(0)
  // Remove all whitespace and lowercase input
  input = input.replace(/\s/g, '').toLowerCase()
  console.log(input)
  // Count characters
  for (let i = 0; i < input.length; i++) {
    characters[input.charCodeAt(i)] += 1
  }
  // Initialize Odd Flag
  let oneOdd = false
  // Check characters for a maximum of one odd
  for (let i = 0; i < characters.length; i++) {
    if (characters[i] % 2 === 1) {
      if (oneOdd) {
        return false
      }
      oneOdd = true
    }
  }
  // If the above code does not return false, the input is a palindrome permutation so return true
  return true
}

// Test Cases:
console.log(palindromePermutation('Tact Coa')) // True
console.log(palindromePermutation('tact coa  ')) // True
console.log(palindromePermutation('Tact sCoa')) // False
