// Add any extra import statements you may need here

// Add any helper functions you may need here

// O(n*log(n) + k*log(k))
function maxCandies(arr, k) {
  let amount = 0; // O(1)
  let relevantBags = arr; // O(1)
  relevantBags.sort((a, b) => b - a); // O(n*log(n))
  while (k > 0) {
    amount += relevantBags[0]; // O(1)
    relevantBags[0] = Math.floor(arr[0] / 2); // O(1)
    relevantBags.sort((a, b) => b - a); // O(k*log(k))
    relevantBags = relevantBags.slice(0, k--); // O(k)
  }
  return amount;
}

// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom.
function printInteger(n) {
  var out = "[" + n + "]";
  return out;
}

var test_case_number = 1;

function check(expected, output) {
  var result = expected == output;
  var rightTick = "\u2713";
  var wrongTick = "\u2717";
  if (result) {
    var out = rightTick + " Test #" + test_case_number;
    console.log(out);
  } else {
    var out = "";
    out += wrongTick + " Test #" + test_case_number + ": Expected ";
    out += printInteger(expected);
    out += " Your output: ";
    out += printInteger(output);
    console.log(out);
  }
  test_case_number++;
}

var n_1 = 5,
  k_1 = 3;
var arr_1 = [2, 1, 7, 4, 2];
var expected_1 = 14;
var output_1 = maxCandies(arr_1, k_1);
check(expected_1, output_1);

var n_2 = 9,
  k_2 = 3;
var arr_2 = [19, 78, 76, 72, 48, 8, 24, 74, 29];
var expected_2 = 228;
var output_2 = maxCandies(arr_2, k_2);
check(expected_2, output_2);

// Add your own test cases here
