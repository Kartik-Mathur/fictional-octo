function mergeSort(arr) {
    // Base case: array of 0 or 1 elements is already sorted
    if (arr.length <= 1) {
      return arr;
    }
  
    // Split the array into left and right halves
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
  
    // Recursively sort both halves and merge them
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;
  
    // Compare elements of left and right arrays and merge them in sorted order
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
  
    // Add remaining elements (if any)
    return result.concat(left.slice(i)).concat(right.slice(j));
  }
  
  // Example usage:
  let numbers = [38, 27, 43, 3, 9, 82, 10];
  console.log("Sorted array:", mergeSort(numbers));
  