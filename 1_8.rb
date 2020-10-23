# Zero Matrix

# Assumptions:
# - Only one cell in matrix is 0
# - Matrix does not have to be square

# Time Complexity: M*N
# Space Complexity: 1

# Alternate Approaches:
# This method only works if there is one zero, could have used a reference matrix of booleans to mark zeros

def zero_matrix(matrix)
    # Initialize pointer and flag
    zero_i = 0
    zero_found = false
    # Find cell that contains 0
    while zero_i < matrix.length do
        # Initialize pointer
        zero_j = 0
        while zero_j < matrix[zero_i].length do
            if matrix[zero_i][zero_j] == 0
                # break out of loop, leaving zero pointers at current location
                zero_found = true
                break
            end
            # Increment pointer
            zero_j += 1
        end
        # Check if zero has been found
        break if zero_found
        # Increment pointer
        zero_i += 1
    end

    # If a zero was not found, return original matrix
    return matrix if !zero_found

    # Set row column & row to zero
    for i in 0...matrix.length
        for j in 0...matrix[i].length
            if i == zero_i || j == zero_j
                matrix[i][j] = 0
            end
        end
    end
    # Return modified matrix
    return matrix
end

# Test Cases:
p(
zero_matrix([
    [1, 2],
    [3, 0],
  ])
)
p(
    zero_matrix([
    [1, 2, 3, 4],
    [5, 6, 0, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
)