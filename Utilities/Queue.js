class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class Queue {
  constructor(first = null, last = null) {
    this.first = first
    this.last = last
  }

  add(data) {
    const currNode = new Node(data)
    if (this.last !== null) {
      this.last.next = currNode
    }
    this.last = currNode
    if (this.first === null) {
      this.first = this.last
    }
  }

  remove() {
    const currNode = this.first
    const first = currNode.next
    if (first === null) {
      this.last = null
    }
    return currNode.data
  }

  peek() {
    return this.first.data
  }

  isEmpty() {
    if (this.peek() === null) {
      return true
    } else {
      return false
    }
  }
}

exports.Queue = Queue
