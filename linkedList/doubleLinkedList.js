// Node class to create a new node
class Node {
    constructor(data) {
      this.data = data; // Value of the node
      this.next = null; // Pointer to the next node
      this.prev = null; // Pointer to the previous node
    }
  }
  
  // Doubly Linked List class
  class DoublyLinkedList {
    constructor() {
      this.head = null; // Head of the list (initially empty)
      this.tail = null; // Tail of the list (to maintain the end of the list)
    }
  
    // Method to add a node to the end of the list
    append(data) {
      const newNode = new Node(data);
  
      if (!this.head) {
        // If the list is empty, the new node becomes both head and tail
        this.head = newNode;
        this.tail = newNode;
        return;
      }
  
      // Attach newNode at the end of the list
      this.tail.next = newNode;
      newNode.prev = this.tail;
  
      // Update the tail to be the new node
      this.tail = newNode;
    }
  
    // Method to print the list elements in forward order
    printListForward() {
      let current = this.head;
      let listElements = [];
  
      // Traverse the list from head to tail and collect node data
      while (current) {
        listElements.push(current.data);
        current = current.next;
      }
  
      console.log("Doubly Linked List (Forward):", listElements.join(" <-> "));
    }
  
    // Method to print the list elements in reverse order
    printListBackward() {
      let current = this.tail;
      let listElements = [];
  
      // Traverse the list from tail to head and collect node data
      while (current) {
        listElements.push(current.data);
        current = current.prev;
      }
  
      console.log("Doubly Linked List (Backward):", listElements.join(" <-> "));
    }
  }
  
  // Example usage:
  let list = new DoublyLinkedList();
  list.append(10);
  list.append(20);
  list.append(30);
  list.append(40);
  
  // Print the linked list in forward direction
  list.printListForward();
  
  // Print the linked list in backward direction
  list.printListBackward();
  