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

  // Inserts a new data into the tree
  insert(data) {
    const newNode = new Node(data)

    if (this.root === null) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  // Inserts a node into the first available spot in the tree
  inserNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode
      } else {
        this.inserNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        this.inserNode(node.right, newNode)
      }
    }
  }
}

exports.Tree = Tree
