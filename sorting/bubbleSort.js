// Repeatedly swapping of adjacent elements until they are not in sorted order
// The loop will run backward (i=n-1 to 0)
// Another loop inside upper loop (j=0 to i-1) to push the max element to the last index of selected range
// After each iteration, the last part of the array become sorted

function bubbleSort(arr) {
  const n = arr.length;
  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  return arr;
}

const array = [-5, -7, 81, 8, -3, 9, 61];
const ans = bubbleSort(array);
console.log(ans);

// Time -> O(n)^2    Space -> O(1)
