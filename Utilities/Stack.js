// Should make a node class and use that for each data point instead of the array

class Stack {
  constructor() {
    this.data = []
  }

  push(value) {
    this.data.push(value)
  }

  pop() {
    return this.data.pop()
  }

  peek() {
    return this.data[this.data.length - 1]
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
