// Quick Sort function
function quickSort(arr) {
    // Base case: arrays with fewer than 2 elements are already sorted
    if (arr.length < 2) {
      return arr;
    }
  
    // Select a pivot element (can be any element, here we use the first one)
    const pivot = arr[0];
    const left = [];
    const right = [];
  
    // Partition the array into two halves
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    // Recursively sort the left and right arrays, then combine them with the pivot
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  
  // Example usage:
  let arr = [12, 4, 13, 5, 6, 7];
  console.log("Original array:", arr);
  
  let sortedArray = quickSort(arr);
  console.log("Sorted array:", sortedArray);
  