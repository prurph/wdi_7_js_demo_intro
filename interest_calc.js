var borrowed,
    interest_rate,
    num_years;

borrowed = prompt("Amount borrowed:");
interest_rate = prompt("Interest rate (e.g. 3):");
num_years = prompt("Years:");

var int_calc = function(borrowed, interest_rate, num_years) {
  var percent_rate = interest_rate / 100;
  return borrowed * Math.pow((1 + percent_rate), num_years);
}

console.log(int_calc(borrowed, interest_rate, num_years));
