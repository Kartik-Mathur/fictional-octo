//created by Karthik
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    // Divide the array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Recursively sort and merge
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;

    // Compare elements from left and right arrays
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Add any remaining elements
    return result.concat(left.slice(i)).concat(right.slice(j));
}

// Example usage
const array = [38, 27, 43, 3, 9, 82, 10];
console.log("Sorted array:", mergeSort(array));
