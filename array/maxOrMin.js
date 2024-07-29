function maxAndMinElementOfArray(arr) {
  let maxi = arr[0];
  let mini = arr[0];

  for (let i = 0; i < arr.length; i++) {
    mini = Math.min(mini, arr[i]);
    maxi = Math.max(maxi, arr[i]);
  }
  return mini, maxi;
}

const array = [-5, -7, 81, 8, -3, 9, 61];
const ans = maxAndMinElementOfArray(array);
console.log(ans);
