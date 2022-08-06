function calculate() {
  let y = 0;
  return {
    add(x) {
      y += x;
      return this;
    },
    multiply(x) {
      y *= x;
      return this;
    },
    sub(x) {
      y -= x;
      return this;
    },
    divide(x) {
      y /= x;
      return this;
    },
    printResult() {
      console.log(y);
    },
  };
}

const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7