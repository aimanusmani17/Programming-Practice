// Merge Sort function
function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    // Find the middle of the array
    const middle = Math.floor(arr.length / 2);
  
    // Divide the array into two halves
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
  
    // Recursively sort the two halves
    return merge(mergeSort(left), mergeSort(right));
  }
  
  // Merge two sorted arrays
  function merge(left, right) {
    let resultArray = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    // Compare each element of the two arrays and push the smaller one
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex]);
        leftIndex++; // Move left array pointer
      } else {
        resultArray.push(right[rightIndex]);
        rightIndex++; // Move right array pointer
      }
    }
  
    // Concatenate remaining elements of the left and right arrays (if any)
    return resultArray
      .concat(left.slice(leftIndex))
      .concat(right.slice(rightIndex));
  }
  
  // Example usage:
  let arr = [12, 11, 13, 5, 6, 7];
  console.log("Original array:", arr);
  
  let sortedArray = mergeSort(arr);
  console.log("Sorted array:", sortedArray);
  