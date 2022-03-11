// Add any extra import statements you may need here

// Add any helper functions you may need here

function findMaxProduct(arr) {
  // Write your code here

  const heap = []; // 7, 2, 4

  const output = arr.map((val, i) => {
    // [2, 4, 7, 1, 5, 3];
    heap.push(val);
    // heapify
    if (i > 0) {
      let cur = i;
      let parent = Math.floor((cur - 1) / 2);
      while (heap[cur] > heap[parent] && cur > 0) {
        [heap[cur], heap[parent]] = [heap[parent], heap[cur]];
        cur = parent;
        parent = Math.floor((cur - 1) / 2);
      }
    }
    // return the product
    if (i < 2) return -1;
    return heap.slice(0, 3).reduce((res, cur) => res * cur, 1);
  });

  return output;
}

// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom.
function printintegerArray(array) {
  var size = array.length;
  var res = "";
  res += "[";
  var i = 0;
  for (i = 0; i < size; i++) {
    if (i !== 0) {
      res += ", ";
    }
    res += array[i];
  }
  res += "]";
  return res;
}

var test_case_number = 1;

function check(expected, output) {
  var expected_size = expected.length;
  var output_size = output.length;
  var result = true;
  if (expected_size != output_size) {
    result = false;
  }
  for (var i = 0; i < Math.min(expected_size, output_size); i++) {
    result &= output[i] == expected[i];
  }
  var rightTick = "\u2713";
  var wrongTick = "\u2717";
  if (result) {
    var out = rightTick + " Test #" + test_case_number;
    console.log(out);
  } else {
    var out = "";
    out += wrongTick + " Test #" + test_case_number + ": Expected ";
    out += printintegerArray(expected);
    out += " Your output: ";
    out += printintegerArray(output);
    console.log(out);
  }
  test_case_number++;
}

var arr_1 = [1, 2, 3, 4, 5];
var expected_1 = [-1, -1, 6, 24, 60];
var output_1 = findMaxProduct(arr_1);
check(expected_1, output_1);

var arr_2 = [2, 4, 7, 1, 5, 3];
var expected_2 = [-1, -1, 56, 56, 140, 140];
var output_2 = findMaxProduct(arr_2);
check(expected_2, output_2);

// Add your own test cases here
