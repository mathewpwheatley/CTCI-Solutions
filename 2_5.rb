# Sum Lists

# Assumptions:
# - Each node contains a single digit
# - Singly linked lists
# - Each node contains a single digit integer
# - Each list number is stored in reverese order
# - Each linked list can have a different length

# Time Complexity: N + M 
# Space Complexity: 1

# Alternate Approaches:

def linked_list_to_number(head)
    # Initialize variable
    number = ""
    curr_node = head
    # Step through linked list
    while curr_node
        # Concatenate number to strings (in reveres order)
        number = curr_node.data.to_s + number
        # Increment node
        curr_node = curr_node.next
    end
    return number.to_i
end

def sum_lists(head_1, head_2)
    # Calculate output number
    number = linked_list_to_number(head_1) + linked_list_to_number(head_2)
    # Build linked list from number (reverese order taken care of by digits method)
    # Reverse method is expesive in time space, might be better to convert to string, split, and convert each digit back to integer
    return build(number.digits.reverse)
end

# Test Cases:
require './Utilities/LinkedList.rb'

list_1 = build([7,1,6])
list_2 = build([5,9,2])
output = sum_lists(list_1, list_2)
puts(output.data, output.next.data, output.next.next.data)