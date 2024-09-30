// Node class to create a new node for the tree
class Node {
    constructor(data) {
      this.data = data;      // Value of the node
      this.left = null;      // Pointer to the left child node
      this.right = null;     // Pointer to the right child node
    }
  }
  
  // Binary Tree class
  class BinaryTree {
    constructor() {
      this.root = null;      // Root of the tree (initially empty)
    }
  
    // Method to insert a new node into the tree
    insert(data) {
      const newNode = new Node(data);
  
      if (!this.root) {
        // If the tree is empty, the new node becomes the root
        this.root = newNode;
      } else {
        // Insert the node at the appropriate position
        this.insertNode(this.root, newNode);
      }
    }
  
    // Helper method to recursively insert a node in the tree
    insertNode(node, newNode) {
      if (newNode.data < node.data) {
        // If the new node is smaller, go to the left subtree
        if (!node.left) {
          node.left = newNode; // Place the new node if the left subtree is empty
        } else {
          this.insertNode(node.left, newNode); // Recur to the left subtree
        }
      } else {
        // If the new node is greater, go to the right subtree
        if (!node.right) {
          node.right = newNode; // Place the new node if the right subtree is empty
        } else {
          this.insertNode(node.right, newNode); // Recur to the right subtree
        }
      }
    }
  
    // Method to perform in-order traversal of the tree
    inorderTraversal(node) {
      if (node !== null) {
        this.inorderTraversal(node.left);     // Visit the left subtree
        console.log(node.data);               // Visit the node
        this.inorderTraversal(node.right);    // Visit the right subtree
      }
    }
  
    // Method to perform pre-order traversal of the tree
    preorderTraversal(node) {
      if (node !== null) {
        console.log(node.data);               // Visit the node
        this.preorderTraversal(node.left);    // Visit the left subtree
        this.preorderTraversal(node.right);   // Visit the right subtree
      }
    }
  
    // Method to perform post-order traversal of the tree
    postorderTraversal(node) {
      if (node !== null) {
        this.postorderTraversal(node.left);   // Visit the left subtree
        this.postorderTraversal(node.right);  // Visit the right subtree
        console.log(node.data);               // Visit the node
      }
    }
  }
  
  // Example usage:
  let tree = new BinaryTree();
  tree.insert(15);
  tree.insert(25);
  tree.insert(10);
  tree.insert(7);
  tree.insert(22);
  tree.insert(17);
  tree.insert(13);
  
  // Traversals
  console.log("In-order traversal:");
  tree.inorderTraversal(tree.root);  // Output: 7 10 13 15 17 22 25
  
  console.log("Pre-order traversal:");
  tree.preorderTraversal(tree.root); // Output: 15 10 7 13 25 22 17
  
  console.log("Post-order traversal:");
  tree.postorderTraversal(tree.root); // Output: 7 13 10 17 22 25 15
  