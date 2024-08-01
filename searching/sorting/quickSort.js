// Algo:
// quickSort(arr, low, high) {
//   if (low < high) {
//     pIndex = partition(arr, low, high);
//     quickSort(arr, low, pIndex - 1);
//     quickSort(arr, pIndex + 1, high);
//   }
// }

function partition(arr, low, high) {
  let pivot = arr[low];
  i = low;
  j = high;

  while (i < j) {
    while (arr[i] <= pivot && i <= high - 1) {
      i++;
    }
    while (arr[j] > pivot && j >= low + 1) {
      j--;
    }
    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[low], arr[j]] = [arr[j], arr[low]];
  return j;
}

function quickSort(arr, low, high) {
  if (low < high) {
    let pIndex = partition(arr, low, high);
    quickSort(arr, low, pIndex - 1);
    quickSort(arr, pIndex + 1, high);
  }
}

const array = [-5, -7, 81, 8, -3, 9, 61];
quickSort(array, 0, array.length - 1);
console.log(array);

// Time => O (n log n)  Space => O(1)
