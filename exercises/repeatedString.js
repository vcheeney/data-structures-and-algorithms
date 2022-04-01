/*
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

function repeatedString(s, n) {
  // Write your code here
  if (n <= s.length) {
    return s
      .slice(0, n)
      .split("")
      .filter((c) => c === "a").length;
  } else {
    const completeRepetitionsAmount = Math.floor(n / s.length);
    const substringCharAmount = n - completeRepetitionsAmount * s.length;
    return (
      repeatedString(s, substringCharAmount) +
      completeRepetitionsAmount * repeatedString(s, s.length)
    );
  }
}

function main() {
  repeatedString("aba", 10);
}

main();
