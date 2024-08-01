function maxAndMinElementOfArray(arr) {
  let maxi = 0;
  let mini = 0;
  for (let i = 0; i < arr.length; i++) {
    if (maxi < arr[i]) {
      maxi = arr[i];
    }
    if (mini > arr[i]) {
      mini = arr[i];
    }
  }
  return [mini, maxi];
}

const array = [-5, -7, 81, 8, -3, 9, 61];
const ans = maxAndMinElementOfArray(array);
console.log(ans);
