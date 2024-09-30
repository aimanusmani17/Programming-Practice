class Node {
    constructor(data) {
      this.data = data; // The value of the node
      this.left = null; // Left child
      this.right = null; // Right child
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null; // The root of the tree is initially null
    }
  
    // Method to insert a new node in the BST
    insert(data) {
      const newNode = new Node(data);
      
      // If the tree is empty, set the root to the new node
      if (this.root === null) {
        this.root = newNode;
      } else {
        this._insertNode(this.root, newNode);
      }
    }
  
    // Helper method to recursively find the correct place for the new node
    _insertNode(node, newNode) {
      if (newNode.data < node.data) {
        // If newNode's data is less, go to the left
        if (node.left === null) {
          node.left = newNode; // Insert as left child
        } else {
          this._insertNode(node.left, newNode); // Recur on the left subtree
        }
      } else {
        // If newNode's data is greater or equal, go to the right
        if (node.right === null) {
          node.right = newNode; // Insert as right child
        } else {
          this._insertNode(node.right, newNode); // Recur on the right subtree
        }
      }
    }
  
    // Method to search for a node in the BST
    search(data) {
      return this._searchNode(this.root, data);
    }
  
    // Helper method to recursively search for a node
    _searchNode(node, data) {
      if (node === null) {
        return false; // Node not found
      }
      
      if (data < node.data) {
        // If the data is less, go to the left subtree
        return this._searchNode(node.left, data);
      } else if (data > node.data) {
        // If the data is greater, go to the right subtree
        return this._searchNode(node.right, data);
      } else {
        return true; // Node found
      }
    }
  
    // Method to perform in-order traversal
    inorderTraversal(node) {
      if (node !== null) {
        this.inorderTraversal(node.left); // Visit the left subtree
        console.log(node.data); // Print the node's value
        this.inorderTraversal(node.right); // Visit the right subtree
      }
    }
  }
  
  // Example usage
  const bst = new BinarySearchTree();
  
  // Inserting values into the BST
  bst.insert(50);
  bst.insert(30);
  bst.insert(70);
  bst.insert(20);
  bst.insert(40);
  bst.insert(60);
  bst.insert(80);
  
  // Searching for a value
  console.log("Search for 40:", bst.search(40)); // true
  console.log("Search for 90:", bst.search(90)); // false
  
  // In-order traversal of the BST (left-root-right)
  console.log("In-order traversal:");
  bst.inorderTraversal(bst.root);
  