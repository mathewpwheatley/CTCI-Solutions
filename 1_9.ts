// String Rotation

// Assumptions:
// - Assume method "isSubstring" existeds and checks if one word is a substring of another
// - Only one call to "isSubstring" is allowed
// - "isSubstring" returns boolean

// Time Complexity: N
// Space Complexity: N (lenght of longest string)

// Alternate Approaches:
// - Not going to lie, I had to check the solution for this one. See if for details

function isRotation(s1: string, s2: string): boolean {
  // Check strings are equal length and not empty
  if (s1.length === s2.length && s1.length > 0) {
    // Concatenate string
    const s1s1 = s1 + s1
    return isSubstring(s1s1, s2)
  } else {
    // If strings are not equal lengths or empty return false
    return false
  }
}
