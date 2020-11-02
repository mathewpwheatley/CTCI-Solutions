"use strict";
// Palindrome
exports.__esModule = true;
// Assumptions:
// - Singly linked list
// -
// Time Complexity: N
// Space Complexity: N
// Alternate Approaches:
// - Could have coppied list in reverse then compared both
// - Recursion, see CTCI solution
var LinkedList_1 = require("./Utilities/LinkedList");
function palindrome(head) {
    // Initialize stack
    var stack = [];
    // Assign initial node pointers
    var slowNode = head;
    var fastNode = head;
    // Build stack for first half of list
    while (fastNode !== null && fastNode.next !== null) {
        // Push to stack
        stack.push(slowNode.data);
        // Increment node pointers
        slowNode = slowNode.next;
        fastNode = fastNode.next.next;
    }
    // Check for odd number of elements, if so skip middle
    if (fastNode !== null) {
        slowNode = slowNode.next;
    }
    // Compare stack against second half of the linked list
    while (slowNode !== null) {
        // Pull top of stack
        top = stack.pop();
        // Compare
        if (slowNode.data === top) {
            // Increment slow pointer
            slowNode = slowNode.next;
        }
        else {
            // Not a palindrome, return false
            return false;
        }
    }
    // If all above is completed, then return true since it is a palindrome
    return true;
}
// Test Cases:
var test_case_1 = LinkedList_1.build([1, 2, 3, 4, 5, 6, 7, 9]);
var test_case_2 = LinkedList_1.build([1, 2, 3, 4, 3, 2, 1]);
console.log(palindrome(test_case_1));
console.log(palindrome(test_case_2));
