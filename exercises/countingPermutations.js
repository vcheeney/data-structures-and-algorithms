function minOperations(arr) {
  const desiredOutput = [...arr].sort((a, b) => a - b).join(",");

  const visited = {};
  const queue = [[arr, 0]];

  while (queue.length) {
    const [perm, val] = queue.pop();
    visited[perm] = true;

    if (perm.join(",") === desiredOutput) {
      return val;
    }

    for (let reverseLength = 2; reverseLength <= perm.length; reverseLength++) {
      for (
        let startReverse = 0;
        startReverse <= perm.length - reverseLength;
        startReverse++
      ) {
        const endReverse = startReverse + reverseLength;
        const newPerm = [
          ...perm.slice(0, startReverse),
          ...perm.slice(startReverse, endReverse).reverse(),
          ...perm.slice(endReverse, perm.length),
        ];

        if (!visited[newPerm]) {
          queue.unshift([newPerm, val + 1]);
        }
      }
    }
  }

  throw new Error("Unsolvable");
}

const res = minOperations([8, 1, 7, 2, 6, 3, 5, 4]);
console.log("res: ", res);
