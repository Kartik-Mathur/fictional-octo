function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    // Choose a pivot (middle element here)
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];
    const equal = [];

    // Partitioning
    for (let num of arr) {
        if (num < pivot) {
            left.push(num);
        } else if (num > pivot) {
            right.push(num);
        } else {
            equal.push(num);
        }
    }

    // Recursively sort left and right, then concatenate
    return [...quickSort(left), ...equal, ...quickSort(right)];
}