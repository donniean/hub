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

function findPath(tree, id, prevPath) {
  const path = prevPath || [];

  // eslint-disable-next-line no-restricted-syntax
  for (const node of tree) {
    const { id: nodeId, children } = node;
    const tempPath = [...path];

    tempPath.push(nodeId);

    if (id === nodeId) {
      return tempPath;
    }

    if (Array.isArray(children) && children.length > 0) {
      const res = findPath(children, id, tempPath);
      if (res) {
        return res;
      }
    }
  }

  return null;
}

module.exports = { BFS, DFS, DFS2, listToTree, findPath };
