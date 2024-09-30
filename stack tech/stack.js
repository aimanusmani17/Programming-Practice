class Stack {
    constructor() {
      this.items = []; // Array to store stack elements
    }
  
    // Method to add an element to the stack
    push(element) {
      this.items.push(element);
      console.log(`${element} pushed to stack`);
    }
  
    // Method to remove and return the top element of the stack
    pop() {
      if (this.isEmpty()) {
        console.log("Stack is empty");
        return null;
      }
      const removedElement = this.items.pop();
      console.log(`${removedElement} popped from stack`);
      return removedElement;
    }
  
    // Method to view the top element of the stack without removing it
    peek() {
      if (this.isEmpty()) {
        console.log("Stack is empty");
        return null;
      }
      return this.items[this.items.length - 1];
    }
  
    // Method to check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Method to get the size of the stack
    size() {
      return this.items.length;
    }
  
    // Method to print the stack elements
    printStack() {
      console.log("Stack:", this.items.join(" <- "));
    }
  }
  
  // Example usage
  const stack = new Stack();
  stack.push(10);
  stack.push(20);
  stack.push(30);
  stack.printStack(); // Output: Stack: 10 <- 20 <- 30
  
  console.log("Top element is:", stack.peek()); // Output: Top element is: 30
  
  stack.pop(); // Output: 30 popped from stack
  stack.printStack(); // Output: Stack: 10 <- 20
  
  console.log("Stack size is:", stack.size()); // Output: Stack size is: 2
  