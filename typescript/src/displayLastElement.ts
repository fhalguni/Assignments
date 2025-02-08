function displayLastElement<T>(arr: T[]): T {
  return arr[arr.length - 1];
}

console.log(displayLastElement([1, 2, 3, 4, 5, 6]));
