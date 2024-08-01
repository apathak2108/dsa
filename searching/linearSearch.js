function linearSearch(arr, element) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    if (element === arr[i]) return i;
  }
  return -1;
}

const array = [-5, -7, 81, 8, -3, 9, 61];
const itemAtIndex = linearSearch(array, -3);
console.log("Searched element is present at:", itemAtIndex);

// TC => O(n)
// SC => O(1)
