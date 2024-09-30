// Binary Search function
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    // While there is a valid search space
    while (left <= right) {
      // Find the middle index
      let mid = Math.floor((left + right) / 2);
  
      // Check if the middle element is the target
      if (arr[mid] === target) {
        return mid; // Target found, return its index
      }
      // If the target is greater, ignore the left half
      else if (arr[mid] < target) {
        left = mid + 1;
      }
      // If the target is smaller, ignore the right half
      else {
        right = mid - 1;
      }
    }
  
    // If the target is not found, return -1
    return -1;
  }
  
  // Example usage:
  let arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]; // Array must be sorted
  let target = 23;
  
  let result = binarySearch(arr, target);
  
  if (result !== -1) {
    console.log(`Element found at index: ${result}`);
  } else {
    console.log("Element not found in the array");
  }
  