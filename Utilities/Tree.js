class Node {
  constructor(data, left = null, right = null) {
    this.data = data
    this.left = left
    this.right = right
  }
}

class Stack {
  constructor(root = null) {
    this.root = root
  }
}

exports.Tree = Tree
