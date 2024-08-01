function binarySearch(arr, key) {
  let low = 0;
  let high = arr.length - 1;
  let mid;
  while (high >= low) {
    mid = low + Math.floor((high - low) / 2);
    if (arr[mid] == key) return mid;
    if (arr[mid] > key) high = mid - 1;
    else low = mid + 1;
  }
}

const array = [-1, 1, 55, 88, 99, 111, 222];
const itemAtIndex = binarySearch(array, 99);
console.log("Searched element is present at:", itemAtIndex);

// TC => O(log N)
// SC => O(1)
