// Should make a node class and use that for each data point instead of the array

class Queue {
  constructor() {
    this.data = []
  }

  add(value) {
    this.data.push(value)
  }

  remove() {
    return this.data.shift()
  }

  peek() {
    return this.data[0]
  }

  isEmpty() {
    if (this.peek() === undefined) {
      return true
    } else {
      return false
    }
  }
}

exports.Queue = Queue
