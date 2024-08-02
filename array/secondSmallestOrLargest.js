function secondSmallestAndLargest(arr) {
  let n = arr.length;
  let smallest = 0;
  let largest = 0;
  for (let i = 0; i < n; i++) {
    if (largest < arr[i]) {
      largest = arr[i];
    }
    if (smallest > arr[i]) {
      smallest = arr[i];
    }
  }
  let second_smallest = 0;
  let second_largest = 0;
  for (let i = 0; i < n; i++) {
    if (second_largest < arr[i] && arr[i] !== largest) {
      second_largest = arr[i];
    }
    if (second_smallest > arr[i] && arr[i] !== smallest) {
      second_smallest = arr[i];
    }
  }
  return [second_smallest, second_largest];
}

const array = [-5, -7, 81, 8, -3, 9, 61];
console.log(secondSmallestAndLargest(array));
