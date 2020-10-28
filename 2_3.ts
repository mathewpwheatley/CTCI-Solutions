// Delete a Middle Node
// you are only given a node to start, not the head of the list

// Assumptions:
// - Singly linked list
// - Does not have to be the exact middle node, just not first or last
// - Can't perform operation if last node is passed

// Time Complexity:
// Space Complexity:

// Alternate Approaches:
// -

import { Node, build } from './Utilities/LinkedList'

function deleteMiddleNode(node: Node): boolean {
  // Test that node exists and isnt the last node
  if (!!node.data || !!node.next.data) {
    // Update  current nodes next property to skip next node
    node.next = node.next.next
    // Return true to indicate sucess
    return true
  } else {
    //  Return false to indicate failure, ie cant delete a middle node if given last node
    return false
  }
}

// Test Cases:
const test_case_1 = build([1, 2, 3, 4, 5, 6, 7, 9])
deleteMiddleNode(test_case_1.next.next.next)
console.log(test_case_1)
