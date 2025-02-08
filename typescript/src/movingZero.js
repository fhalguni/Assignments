let array = [20, 50, 0, 37, 0, 67];

let array1 = [];
let array2 = [];

for (let i = 0; i < array.length; i++) {
  if (array[i] !== 0) {
    array1.push(array[i]);
  } else {
    array2.push(array[i]);
  }
}

console.log(array1.concat(array2));
