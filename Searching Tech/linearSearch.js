// Linear Search function
function linearSearch(arr, target) {
    // Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
      // If the target element is found, return its index
      if (arr[i] === target) {
        return i;
      }
    }
    // If the target is not found, return -1
    return -1;
  }
  
  // Example usage:
  let arr = [10, 24, 36, 48, 50];
  let target = 36;
  
  let result = linearSearch(arr, target);
  
  if (result !== -1) {
    console.log(`Element found at index: ${result}`);
  } else {
    console.log("Element not found in the array");
  }
  