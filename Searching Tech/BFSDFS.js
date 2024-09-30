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
  
    // Breadth-First Search (BFS) algorithm
    bfs(start) {
      const visited = {};
      const queue = [start]; // Start with the initial vertex
      visited[start] = true; // Mark the starting vertex as visited
  
      while (queue.length) {
        const vertex = queue.shift(); // Remove the first element from the queue
        console.log(vertex); // Process the current vertex
  
        // Iterate over adjacent vertices
        for (const neighbor of this.adjacencyList[vertex]) {
          if (!visited[neighbor]) {
            visited[neighbor] = true; // Mark the neighbor as visited
            queue.push(neighbor); // Add the neighbor to the queue
          }
        }
      }
    }
  
    // Depth-First Search (DFS) algorithm
    dfs(start) {
      const visited = {};
      this._dfsHelper(start, visited); // Helper function for DFS
    }
  
    _dfsHelper(vertex, visited) {
      visited[vertex] = true; // Mark the vertex as visited
      console.log(vertex); // Process the current vertex
  
      // Iterate over adjacent vertices
      for (const neighbor of this.adjacencyList[vertex]) {
        if (!visited[neighbor]) {
          this._dfsHelper(neighbor, visited); // Recursively visit the neighbor
        }
      }
    }
  }
  
  // Example usage
  const graph = new Graph();
  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  graph.addVertex('D');
  graph.addVertex('E');
  
  graph.addEdge('A', 'B');
  graph.addEdge('A', 'C');
  graph.addEdge('B', 'D');
  graph.addEdge('C', 'E');
  
  // BFS Traversal
  console.log("BFS Traversal starting from vertex A:");
  graph.bfs('A');
  
  // DFS Traversal
  console.log("DFS Traversal starting from vertex A:");
  graph.dfs('A');
  