/* const node = {
  id: '1',
  title: '节点 1',
  children: [],
}; */

function BFS(tree) {
  const result = [];
  const queue = [...tree];

  while (queue.length > 0) {
    const { children, ...rest } = queue.shift();

    result.push(rest);

    if (Array.isArray(children) && children.length > 0) {
      const { id: parentId } = rest;
      const newChildren = children.map((node) => ({ ...node, parentId }));
      queue.push(...newChildren);
    }
  }

  return result;
}

// 循环
function DFS1(tree) {
  const res = [];
  const stack = [...tree];

  while (stack.length > 0) {
    const { children, ...rest } = stack.pop();

    res.push(rest);

    if (Array.isArray(children) && children.length > 0) {
      const { id: parentId } = rest;
      const newChildren = children.map((item) => ({ ...item, parentId }));
      stack.push(...newChildren);
    }
  }

  return res;
}

// 递归
function DFS2(tree, res = []) {
  const result = [...res];

  if (Array.isArray(tree)) {
    tree.forEach(({ children, ...rest }) => {
      result.push(rest);

      if (Array.isArray(children) && children.length > 0) {
        const { id: parentId } = rest;
        const newChildren = children.map((item) => ({ ...item, parentId }));
        DFS2(newChildren, result);
      }
    });
  }

  return result;
}

/* const node = {
  id: '1',
  title: '节点 1',
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

module.exports = { BFS, DFS1, DFS2, listToTree, findPath };
