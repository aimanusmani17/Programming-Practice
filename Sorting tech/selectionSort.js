// Selection Sort function
function selectionSort(arr) {
    let n = arr.length;
  
    // Traverse through all array elements
    for (let i = 0; i < n - 1; i++) {
      // Find the minimum element in the unsorted part of the array
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
  
      // Swap the found minimum element with the first element
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Swap using destructuring
      }
    }
  
    return arr;
  }
  
  // Example usage:
  let arr = [29, 10, 14, 37, 13];
  console.log("Original array:", arr);
  
  let sortedArray = selectionSort(arr);
  console.log("Sorted array:", sortedArray);
  