// Algo:
// function mergeSort(arr, low, high) {
//   if (low >= high) return; // Base case
//   let mid = (low + high) / 2;
//   mergeSort(arr, low, mid); // left half
//   mergeSort(arr, mid + 1, high); // right half
//   merge(arr, low, mid, high);
// }

function merge(arr, low, mid, high) {
  let temp = [];
  let left = low;
  let right = mid + 1;

  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }
  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }
  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }
  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
}

function mergeSort(arr, low, high) {
  if (low >= high) return;
  let mid = Math.floor((low + high) / 2);
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);
  merge(arr, low, mid, high);
}

const array = [-5, -7, 81, 8, -3, 9, 61];
mergeSort(array, 0, array.length - 1);
console.log(array);

// Time => O(n log n)  Space => O(n)
