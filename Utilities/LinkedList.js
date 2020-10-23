class SinglyLinkedListNode {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

function buildSinglyLinkedList(dataArray) {
  const head = new SinglyLinkedListNode(dataArray[0])
  let prevNode = head
  for (let i = 1; i < dataArray.length; i++) {
    const currNode = new SinglyLinkedListNode(dataArray[i])
    prevNode.next = currNode
  }
  return head
}

class DoublyLinkedListNode {
  constructor(data, next = null, previous = null) {
    this.data = data
    this.next = next
    this.previous = previous
  }
}

function buildDoublyLinkedList(dataArray) {
  const head = new DoublyLinkedListNode(dataArray[0])
  let prevNode = head
  for (let i = 1; i < dataArray.length; i++) {
    const currNode = new DoublyLinkedListNode(dataArray[i])
    currNode.previous = prevNode
    prevNode.next = currNode
  }
  return head
}
