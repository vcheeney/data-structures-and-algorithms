const dict = {};

function computePermutations(P) {
  const desiredOutput = [...P].sort((a, b) => a - b).join(",");
  while (true) {
    let curPerm = Object.keys(dict).reduce((res, curKey) => {
      return dict[curKey] > dict[res] ? curKey : res;
    }, P);

    curPerm = typeof curPerm === "string" ? curPerm.split(",") : curPerm;

    for (
      let reverseLength = 2;
      reverseLength <= curPerm.length;
      reverseLength++
    ) {
      for (
        let startReverse = 0;
        startReverse <= curPerm.length - reverseLength;
        startReverse++
      ) {
        const endReverse = startReverse + reverseLength;
        const newPerm = [
          ...curPerm.slice(0, startReverse),
          ...curPerm.slice(startReverse, endReverse).reverse(),
          ...curPerm.slice(endReverse, curPerm.length),
        ];

        if (typeof dict[newPerm] !== "undefined") {
          dict[newPerm] = Math.min(dict[newPerm], dict[curPerm] + 1);
        } else {
          dict[newPerm] = dict[curPerm] + 1;
        }

        if (newPerm.join(",") === desiredOutput) {
          return dict[curPerm] + 1;
        }
      }
    }
  }
}

function minOperations(arr) {
  dict[arr] = 0;
  return computePermutations(arr);
}

const res = minOperations([1, 2, 3, 5, 4]);

console.log("res: ", res);
console.log(JSON.stringify(dict, null, 2));
