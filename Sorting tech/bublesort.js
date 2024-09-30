// Bubble Sort function
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    
    // Outer loop to traverse through all elements
    for (let i = 0; i < n - 1; i++) {
      swapped = false;
      
      // Inner loop for comparison and swapping
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap if the element is greater than the next element
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          swapped = true;
        }
      }
  
      // If no elements were swapped, break the loop
      if (!swapped) {
        break;
      }
    }
    return arr;
  }
  
  // Example usage
  let arr = [64, 34, 25, 12, 22, 11, 90];
  console.log("Original array:", arr);
  
  let sortedArray = bubbleSort(arr);
  console.log("Sorted array:", sortedArray);
  