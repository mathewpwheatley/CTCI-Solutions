class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

function build(dataArray) {
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
