var factor_tree = function(total) {
  var tree = [],
      divisor = 2,
      max = total;
  while (divisor <= max) {
    if (max % divisor === 0) {
      tree.push(divisor);
      max = max / divisor;
      divisor = 1;
    }
    divisor = divisor + 1;
  }
  return tree;
}
