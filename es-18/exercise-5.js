function memoize(fn) {
  let cache = {};
  return (number) => {
    if (number in cache) {
      return `Fetching from cache for ${cache[number]}`;
    } else {
      console.log(`Calculating result for ${number}`);
      let result = fn(number);
      cache[number] = result;
      return result;
    }
  };
}

function factorial(x) {
  if (x === 0) {
    return 1;
  }
  return x * factorial(x - 1);
}

factorial = memoize(factorial);
console.log(factorial(10));
console.log(factorial(6));
console.log(factorial(5));