# Check Permutation

# Assumptions:
# - Permutations are case sensitive
# - Permutations care about whitespace

# Time Complexity: N
# Space Complexity: N

# Alternate Approaches:
# - Would have likely been cleaner to use an array of lenght 128 (assuming ASCII characters) with 0 as a default value
# - Could also have sorted both arrays and directly compared them

def is_permutation(string1, string2)
    return false if (string1.length != string2.length)
    dictionary = {}
    # Fill dictionary based on first string
    string1.split('').each do |char|
        dictionary[char] ? dictionary[char] += 1 : dictionary[char] = 1
    end
    # Empty dictionary based on second string
    string2.split('').each do |char|
        # If character doesnt exist, it is not a permutation
        if !dictionary[char]
            return false
        else
            # Subtract character count
            dictionary[char] -= 1
            # If character count goes below zero it is not a permutation
            return false if (dictionary[char] < 0)
        end
    end
    # If the above code was completed without returning false string1 is a permutation of string2
    return true
end

# Test Cases:
puts is_permutation("ASD","SDA") # True
puts is_permutation("AD ","SDA") # False
puts is_permutation("ASD ","S DA") # True
puts is_permutation("ASD ","SdA") # flase