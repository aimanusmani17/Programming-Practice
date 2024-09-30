class Queue {
    constructor() {
      this.items = []; // Array to store queue elements
    }
  
    // Method to add an element to the end of the queue
    enqueue(element) {
      this.items.push(element);
      console.log(`${element} added to queue`);
    }
  
    // Method to remove and return the front element of the queue
    dequeue() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
        return null;
      }
      const removedElement = this.items.shift(); // Remove the first element
      console.log(`${removedElement} removed from queue`);
      return removedElement;
    }
  
    // Method to view the front element of the queue without removing it
    front() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
        return null;
      }
      return this.items[0]; // Return the first element
    }
  
    // Method to check if the queue is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Method to get the size of the queue
    size() {
      return this.items.length;
    }
  
    // Method to print the queue elements
    printQueue() {
      console.log("Queue:", this.items.join(" <- "));
    }
  }
  
  // Example usage
  const queue = new Queue();
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  queue.printQueue(); // Output: Queue: 10 <- 20 <- 30
  
  console.log("Front element is:", queue.front()); // Output: Front element is: 10
  
  queue.dequeue(); // Output: 10 removed from queue
  queue.printQueue(); // Output: Queue: 20 <- 30
  
  console.log("Queue size is:", queue.size()); // Output: Queue size is: 2
  