class Graph {
    constructor() {
      this.adjacencyList = {}; // Initialize the adjacency list
    }
  
    // Method to add a vertex to the graph
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = []; // Initialize the adjacency list for the vertex
      }
    }
  
    // Method to add an edge between two vertices
    addEdge(vertex1, vertex2) {
      this.adjacencyList[vertex1].push(vertex2); // Add vertex2 to vertex1's list
      this.adjacencyList[vertex2].push(vertex1); // Add vertex1 to vertex2's list (undirected)
    }
  
    // Method to display the graph
    printGraph() {
      for (const vertex in this.adjacencyList) {
        console.log(`${vertex} --> ${this.adjacencyList[vertex].join(', ')}`);
      }
    }
  }
  
  // Example usage
  const graph = new Graph();
  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  graph.addVertex('D');
  
  graph.addEdge('A', 'B');
  graph.addEdge('A', 'C');
  graph.addEdge('B', 'D');
  graph.addEdge('C', 'D');
  
  // Print the graph
  graph.printGraph();
  