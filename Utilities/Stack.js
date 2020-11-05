class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class Stack {
  constructor(top = null) {
    this.top = top
  }

  push(data) {
    const currNode = new Node(data)
    currNode.next = this.top
    this.top = currNode
  }

  pop() {
    const currNode = this.top
    this.top = currNode.next
    return currNode
  }

  peek() {
    return this.top
  }

  isEmpty() {
    if (this.peek() === null) {
      return true
    } else {
      return false
    }
  }
}

exports.Stack = Stack
