class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}
exports.Node = Node

export function build(dataArray) {
  const head = new Node(dataArray[0])
  let prevNode = head
  for (let i = 1; i < dataArray.length; i++) {
    // Create node
    const currNode = new Node(dataArray[i])
    // Set previous node next property
    prevNode.next = currNode
    // Step previous node
    prevNode = currNode
  }
  return head
}
exports.build = build

function nthNode(head, n) {
  // Initialize current node to the head node
  let currNode = head
  // Step through linked list to nth node
  for (let i = 0; i < n; i++) {
    // Check that next node exists
    if (!!currNode.next) {
      // Update current node to next node
      currNode = currNode.next
    } else {
      // If next node doesnt, exist return null
      return null
    }
  }
  // Return nth node
  return currNode
}
exports.currNode = currNode

function editNode(head, n, newData) {
  // Get current  node via nth node function
  const currNode = nthNode(head, n)
  // Check node is valid
  if (!!currNode) {
    // Update data of nth node
    nthNode(head, n).data = newData
    // Return linked list
    return head
  } else {
    // If node is not valid return null
    return null
  }
}
exports.editNode = editNode

function addNode(head, n, data) {
  // Create new node
  const currNode = new Node(data)
  // Check for edge case when adding to head of list
  if (n === 0) {
    // Assign currNode next to head
    currNode.next = head
    // Return head as linked list head
    return currNode
  }
  // Get previous node via nth node function
  const prevNode = nthNode(head, n - 1)
  // Check for edge case that previous node is outside of list scope
  if (!prevNode) {
    // Return null if location is outside of list scope
    return null
  } else {
    // Assign current nodes next property to previous node next property
    currNode.next = prevNode.next
    // Update current nodes next property to new node
    prevNode.next = currNode
    // Return linked list
    return head
  }
}
exports.addNode = addNode

function deleteNode(head, n) {
  // Check edge case for deleting head node
  if (n === 0) {
    // Return node 1 as head of linked list
    return nthNode(head, n + 1)
  }
  // Get previous node via nth node function
  const prevNode = nthNode(head, n - 1)
  // Check for edge case that previous or current node is outside list scope
  if (!prevNode || !prevNode.next) {
    // Return null if location is outside of list scope
    return null
  } else {
    // Update previous node next property to skip node n
    prevNode.next = prevNode.next.next
    // Return linked list
    return head
  }
}
exports.deleteNode = deleteNode
