// Select an element in each iteration
// Place in its corresponding position in the sorted part and shift the remaining elements accordingly
// using an inner loop and swapping

function insertionSort(arr) {
  const n = arr.length;
  for (let i=0; i<n; i++) {
    let j = i;
    while (j>0 && arr[j-1] > arr[j]) {
      [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
      j--;
    }
  }
  return arr;
}

const array = [-5, -7, 81, 8, -3, 9, 61];
const ans = insertionSort(array);
console.log(ans);

// Time -> O(n)^2    Space -> O(1)


