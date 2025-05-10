function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  // Split the array into two halves
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  // Merge the sorted halves
  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  // Compare elements from left and right arrays and push the smaller one
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Concatenate remaining elements (if any)
  return result.concat(left.slice(i)).concat(right.slice(j));
}