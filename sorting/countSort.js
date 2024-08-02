function makeDeepCopy(obj) {
  if (typeof obj !== "object" || obj === "null") {
    return obj;
  }
  let copiedVal = Array.isArray(obj) ? [] : {};
  let keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i++) {
    copiedVal[keys[i]] = makeDeepCopy(obj[keys[i]]);
  }
  return copiedVal;
}

const obj1 = {
  name: "Ananya",
  age: 11,
  tasks: {
    pending: 2,
    completed: 1,
    others: {
      sum: "Pandey",
      lallu: {
        gunda: 0,
        lemon: {
          smile: 0,
        },
      },
    },
  },
};
const obj2 = makeDeepCopy(obj1);
obj2.tasks.others.lallu.lemon.smile++;
console.log(obj1.tasks.others.lallu.lemon.smile);
console.log(obj2.tasks.others.lallu.lemon.smile);
