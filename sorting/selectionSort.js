// Select the range of unsorted array using a loop (0 to n-1)
// For each iteration, select the min index from the range of unsorted array using an inner loop
// Swap the min element with the first element of selected range

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min_idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min_idx]) {
        min_idx = j;
      }
    }
    if (min_idx !== i) {
      [arr[i], arr[min_idx]] = [arr[min_idx], arr[i]];
    }
  }
  return arr;
}

const array = [-5, -7, 81, 8, -3, 9, 61];
const ans = selectionSort(array);
console.log(ans);
