function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
}

const array = [1, 2, 3, 4, 5, 6, 7];
console.log(isSorted(array));
