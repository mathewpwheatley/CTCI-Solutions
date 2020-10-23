// Rotate Matrix

// Assumptions:
// - Matrix is square and contains integers
// - Rotation 90 degress clockwise
// - Doing it in place is prefered for space complexity

// Time Complexity: N^2 (N is single row size)
// Space Complexity: N (storing 1 row at a time)

// Alternate Approaches:
// - Could have created a second matrix and populated it from the input but this increases space complexity

function rotateMatrix(matrix) {
  // Check matrix is populated and is square
  if (matrix.length === 0) {
    return false
  }

  const n = matrix.length
  // Loop through layers of matrix
  for (let layer = 0; layer < n / 2; layer++) {
    const first = layer
    const last = n - 1 - layer
    for (let i = first; i < last; i++) {
      // Calculate offset for curret layer
      const offset = i - first
      // Rotate each row/column 1 at a time via temp variable
      const top = matrix[first][i]
      matrix[first][i] = matrix[last - offset][first]
      matrix[last - offset][first] = matrix[last][last - offset]
      matrix[last][last - offset] = matrix[i][last]
      matrix[i][last] = top
    }
  }
  // Return rotated matrix
  return matrix
}

// Test Cases:
console.log(rotateMatrix([]))
console.log(
  rotateMatrix([
    [1, 2],
    [3, 4],
  ])
)
console.log(
  rotateMatrix([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
)
