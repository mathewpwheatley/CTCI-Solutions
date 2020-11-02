// Palindrome

// Assumptions:
// - Singly linked list
// -

// Time Complexity: N
// Space Complexity: N

// Alternate Approaches:
// - Could have coppied list in reverse then compared both
// - Recursion, see CTCI solution

import { Node, build } from './Utilities/LinkedList'

function palindrome(head: Node): boolean {
  // Initialize stack
  const stack = []
  // Assign initial node pointers
  let slowNode = head
  let fastNode = head
  // Build stack for first half of list
  while (fastNode !== null && fastNode.next !== null) {
    // Push to stack
    stack.push(slowNode.data)
    // Increment node pointers
    slowNode = slowNode.next
    fastNode = fastNode.next.next
  }
  // Check for odd number of elements, if so skip middle
  if (fastNode !== null) {
    slowNode = slowNode.next
  }
  // Compare stack against second half of the linked list
  while (slowNode !== null) {
    // Pull top of stack
    top = stack.pop()
    // Compare
    if (slowNode.data === top) {
      // Increment slow pointer
      slowNode = slowNode.next
    } else {
      // Not a palindrome, return false
      return false
    }
  }
  // If all above is completed, then return true since it is a palindrome
  return true
}

// Test Cases:
const test_case_1 = build([1, 2, 3, 4, 5, 6, 7, 9])
const test_case_2 = build([1, 2, 3, 4, 3, 2, 1])
console.log(palindrome(test_case_1))
console.log(palindrome(test_case_2))
