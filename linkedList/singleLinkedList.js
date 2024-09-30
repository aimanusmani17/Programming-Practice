// Node class to create new nodes
class Node {
    constructor(data) {
      this.data = data; // Value of the node
      this.next = null; // Pointer to the next node
    }
  }
  
  // Singly Linked List class
  class LinkedList {
    constructor() {
      this.head = null; // Head of the list (initially empty)
    }
  
    // Method to add a node to the end of the list
    append(data) {
      const newNode = new Node(data);
  
      if (!this.head) {
        // If the list is empty, the new node becomes the head
        this.head = newNode;
        return;
      }
  
      // Traverse the list and find the last node
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
  
      // Point the last node to the new node
      current.next = newNode;
    }
  
    // Method to print the list elements
    printList() {
      let current = this.head;
      let listElements = [];
  
      // Traverse the list and collect node data
      while (current) {
        listElements.push(current.data);
        current = current.next;
      }
  
      console.log("Linked List:", listElements.join(" -> "));
    }
  }
  
  // Example usage
  let list = new LinkedList();
  list.append(10);
  list.append(20);
  list.append(30);
  list.append(40);
  
  // Print the linked list
  list.printList();
  