var fib = [1,2],
    answer = 2,
    next_fib = 0;
while (next_fib < 4000000) {
  next_fib = fib[fib.length - 1] + fib[fib.length - 2];
  if (next_fib % 2 === 0) {
    answer += next_fib;
  }
  fib.push(next_fib);
}
console.log(answer);
