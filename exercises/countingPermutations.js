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

    for (let start = 0; start < perm.length; start++) {
      for (let end = 2; end <= perm.length; end++) {
        const newPerm = [
          ...perm.slice(0, start),
          ...perm.slice(start, end).reverse(),
          ...perm.slice(end, perm.length),
        ];

        if (!visited[newPerm]) {
          queue.unshift([newPerm, val + 1]);
        }
      }
    }
  }

  throw new Error("Unsolvable");
}

const res = minOperations([3, 1, 2]);
console.log("res: ", res);
