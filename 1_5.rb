# One Away

# Assumptions:
# - There is no whitespace or special characters in the strng
# - Not limited to real words
# - Characters are all ASCII (128 character alphabet)
# - Ignore casing

# Time Complexity: N (where N is shortest string)
# Space Complexity: 1 (Just pointers and flags)

# Alternate Approaches:
# - Could have seperated replace, insert, or delete into another function for more readability

def one_away(string_1, string_2)
    # Check that string lengths are a max of on away
    return false if (string_1.length - string_2.length).abs > 1
    # Lowercase both strings
    string_1 = string_1.downcase
    string_2 = string_2.downcase
    # Set shorter string to string_1
    if string_1.length > string_2.length
        string_1, string_2 = string_2, string_1
    end
    # Initialize indexes and difference flag for use in while loop
    index_1 = 0
    index_2 = 0
    difference_found = false
    while index_1 < string_1.length && index_2 < string_2.length
        # Check for differences between strings
        if (string_1[index_1] != string_2[index_2])
            # Ensure this is the first difference found, if not return false
            return false if difference_found
            # Set difference flag
            difference_found = true
            # Check if this is a replace action (swap letters at this position), if so increment shorter pointer
            index_1 += 1 if string_1.length == string_2.length
        # If characters match increment shorter pointer
        else
            index_1 += 1
        end
        # Always increment longer pointer
        index_2 += 1
    end
    # If the above while loop is completed, return true
    return true
end

# Test Cases:
puts one_away("Pale", "ple") # true
puts one_away("pales", "pale") # true
puts one_away("pale", "bale") # true
puts one_away("pale", "bake") # false
puts one_away("paless", "bale") # false