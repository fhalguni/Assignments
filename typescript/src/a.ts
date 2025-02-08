try {
  let a = 10;
  let b = 0;
  let result = a / b;
  if (b === 0) {
    throw new Error("Division by zero");
  }

  console.log(result);
} catch (error) {
  console.error("An error occurred:", (error as Error).message);
}
