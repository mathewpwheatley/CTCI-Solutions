class Stack {
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

  peek() {
    return this.top
  }

  isEmpty() {
    if (this.top === null) {
      return true
    } else {
      return false
    }
  }
}

exports.Stack = Stack