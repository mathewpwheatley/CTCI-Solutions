# Return Kth to last

# Assumptions:
# - List length is unknown
# - Singly linked list

# Time Complexity: N
# Space Complexity: 1

# Alternate Approaches:
# - Several other approaches, see CTCI solutions

def k_to_last(head, k)
    # Initialize variables to be used in following loop
    currNode = head
    list_length = 0
    # Step through list until the end is found to determine list length
    while currNode
        list_length += 1
        currNode = currNode.next
    end
    # Calculated the k location based on length
    k_index = list_length - k
    # Reset currNode
    currNode = head
    # Step through list until k node is found
    for i in 0...k_index
        currNode = currNode.next
    end
    # Return result
    return currNode
end

# Test Cases:
# Not currently tested, verified against solutions in CTCI
require './Utilities/LinkedList.rb'

test_case_1 = build([1,2,3,4,5,6,7,9])
puts (k_to_last(test_case_1,3).data)
