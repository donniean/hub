function BFS(tree) {
  const res = [];
  const queue = [...tree];

  while (queue.length > 0) {
    const { children = [], ...rest } = queue.shift();
    res.push(rest);
    if (children.length > 0) {
      queue.push(...children);
    }
  }

  return res;
}

// 递归
function DFS(tree, res = []) {
  const result = res || [];

  tree.forEach((node) => {
    const { children = [], ...rest } = node;
    res.push(rest);
    if (children.length > 0) {
      DFS(children, result);
    }
  });

  return res;
}

// 循环
function DFS2(tree) {
  const res = [];
  const queue = [...tree];

  while (queue.length > 0) {
    const { children = [], ...rest } = queue.shift();
    res.push(rest);
    if (children.length > 0) {
      queue.unshift(...children);
    }
  }

  return res;
}

module.exports = { BFS, DFS, DFS2 };
