class Queue {
  constructor() {
    this.data = []
    this.top = null
  }

  push(value) {
    this.data.push(value)
    this.top = value
  }

  pop() {
    const value = this.data.pop()
    this.top = this.data[this.data.length - 1]
    return value
  }
}

exports.Stack = Stack
