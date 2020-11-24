class Node {
  constructor(data, left = null, right = null) {
    this.data = data
    this.left = left
    this.right = right
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root
  }

  // Inserts a new data into the tree
  add(data) {
    const newNode = new Node(data)

    if (this.root === null) {
      this.root = newNode
    } else {
      this.addNode(this.root, newNode)
    }
  }

  // Inserts a node into the first available spot in the tree
  addNode(node, newNode) {
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

  remove(data) {
    this.root = this.removeNode(this.root, data)
  }

  removeNode(node, data) {
    // Empty tree (Data not found in tree)
    if (node === null) {
      return null
      // Recursively step through tree
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data)
      return node
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data)
      return node
      // Data has been found and will now be removed
    } else {
      // Remove node with no children
      if (node.left === null && node.right === null) {
        node = null
        return node
      }
      // Remove node with one child
      if (node.left === null) {
        node = node.right
        return node
      } else if (node.right === null) {
        node = node.left
        return node
      }
      // Remove node with two children
      const aux = this.findMinNode(node.right)
      node.data = aux.data
      node.right = this.removeNode(node.right, aux.data)
      return node
    }
  }

  findMinNode(node) {
    if (node.left === null) {
      return node
    } else {
      return this.findMinNode(node.left)
    }
  }
}

exports.BinaryTree = BinaryTree

// https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/
