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

function listToTree(list) {
  const result = [];
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
      result.push(node);
    }
  });

  return result;
}

function findPath(tree, id, prevPath) {
  const path = prevPath || [];

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

export { BFS, DFS1, DFS2, findPath, listToTree };

/* const tree = [
  {
    id: '1',
    title: 'node 1',
    children: [
      {
        id: '1-1',
        title: 'node 1-1',
        children: [
          {
            id: '1-1-1',
            title: 'node 1-1-1',
          },
          {
            id: '1-1-2',
            title: 'node 1-1-2',
          },
          {
            id: '1-1-3',
            title: 'node 1-1-3',
          },
        ],
      },
      {
        id: '1-2',
        title: 'node 1-2',
        children: [
          {
            id: '1-2-1',
            title: 'node 1-2-1',
          },
          {
            id: '1-2-2',
            title: 'node 1-2-2',
          },
        ],
      },
    ],
  },
  {
    id: '2',
    title: 'node 2',
    children: [
      {
        id: '2-1',
        title: 'node 2-1',
      },
    ],
  },
];

const list = [
  { id: '1', title: 'node 1' },
  { id: '2', title: 'node 2' },
  { id: '1-1', title: 'node 1-1', parentId: '1' },
  { id: '1-2', title: 'node 1-2', parentId: '1' },
  { id: '2-1', title: 'node 2-1', parentId: '2' },
  { id: '1-1-1', title: 'node 1-1-1', parentId: '1-1' },
  { id: '1-1-2', title: 'node 1-1-2', parentId: '1-1' },
  { id: '1-1-3', title: 'node 1-1-3', parentId: '1-1' },
  { id: '1-2-1', title: 'node 1-2-1', parentId: '1-2' },
  { id: '1-2-2', title: 'node 1-2-2', parentId: '1-2' },
]; */
