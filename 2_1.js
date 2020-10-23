// Remove Dups

// Assumptions:
// - Singly linked list
// - Data in linked list is a integer

// Time Complexity: N
// Space Complexity: 1 (only head currNode and prevNode)

// Alternate Approaches:
// - Use two pointers to avoid having the buffer

function removeDups(head) {
  // Create object to store data
  set = {}
  // Initialize node variables
  currNode = head
  prevNode = null
  // Step through the linked list
  while (currNode != null) {
    // Check if data has is already in the linked list
    if (set[currNode.data]) {
      // If this data is already in the link list, reassign the next node to skip this one
      previous.next = currNode.next
    } else {
      set[currNode.data] = true
    }
    // Step through nodes
    prevNode = currNode
    currNode = currNode.next
  }
  return head
}

// Test Cases:
// Not tested, verified against CTCI solution
