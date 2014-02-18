for(var i = 0, answer = 0; i < 1000;) {
  if (i % 3 === 0 || i % 5 === 0) {
    answer = answer + i;
  }
  i = i + 1;
}
