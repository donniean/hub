/* const node = {
  id: '1',
  title: '节点1',
  children: [],
}; */

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

// 循环
function DFS(tree) {
  const res = [];
  const stack = [...tree];

  while (stack.length > 0) {
    const { children = [], ...rest } = stack.pop();
    res.push(rest);
    if (children.length > 0) {
      stack.push(...children);
    }
  }

  return res;
}

// 递归
function DFS2(tree, res = []) {
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

/* const node = {
  id: '1',
  title: '节点1',
  parentId: '',
}; */

function listToTree(list) {
  const tree = [];
  const map = {};

  list.forEach((node) => {
    const { id } = node;
    map[id] = node;
  });

  list.forEach((node) => {
    const { parentId } = node;

    if (parentId) {
      const parentNode = map[parentId];
      parentNode.children = parentNode.children || [];
      parentNode.children.push(node);
    } else {
      tree.push(node);
    }
  });

  return tree;
}

module.exports = { BFS, DFS, DFS2, listToTree };
