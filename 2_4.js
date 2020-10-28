// Partition

// Assumptions:
// - Singly linked list
// - data values are all integers
// - Values equal to value are place after partition

// Time Complexity: N
// Space Complexity: N

// Alternate Approaches:
// - Several other approaches, see CTCI solutions

import { Node, build } from './Utilities/LinkedList'

function partition(head, value) {
  // Create head nodes for each side of the partition list
  const lowListHead = new Node(null)
  const highListHead = new Node(null)
  // Initialize current node for all linked lists
  let currNode = head
  let lowCurrNode = lowListHead
  let highCurrNode = lowListHead
  // Step through provided linked list
  while (currNode !== null) {
    // Check if value is low or high
    if (currNode.data < value) {
      // Check if this is the head of the list
      if (lowCurrNode.data === null) {
        // Update head node data value
        lowCurrNode.data = currNode.data
      } else {
        // Create new node and update current node
        lowCurrNode.next = new Node(currNode.data)
        lowCurrNode = lowCurrNode.next
      }
      // Value is high
    } else {
      // Check if this is the head of the list
      if (highCurrNode.data === null) {
        // Update head node data value
        highCurrNode.data = currNode.data
      } else {
        // Create new node and update current node
        highCurrNode.next = new Node(currNode.data)
        highCurrNode = highCurrNode.next
      }
    }
  }
  // Combine the low and high linked lists
  lowCurrNode.next = highListHead
  // Return partitioned list
  return lowListHead
}

// Test Cases:
const test_case_1 = build([1, 20, 34, 4, 5, 62, 7, 9])
partition(test_case_1, 20)
console.log(test_case_1)
