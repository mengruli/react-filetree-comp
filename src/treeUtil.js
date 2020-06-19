function buildTree(posts) {
    if (!posts || posts.length === 0) return;
    let visited = new Set();
    let trace = "";
  
    let root = { name: null, items: [], depth: -1, trace: trace };
    for (let i = 0; i < posts.length; i++) {
      let paths = posts[i].filename.split("/");
      for (let k = 0; k < paths.length; k++) {
        insertNode(root, paths, k, visited);
      }
    }
  
    return root;
  }
  
  function insertNode(tree, subPaths, index, visited) {
    let trace = subPaths.slice(0, index + 1).join("/");
    let parentTrace = subPaths.slice(0, index).join("/");
    if (visited.has(trace)) {
      return;
    }
  
    if (visited.has(parentTrace)) {
      addToParent(tree, subPaths, index, visited);
    } else {
      let node = {
        name: subPaths[index],
        items: [],
        depth: index,
        trace: trace
      };
      tree.items.push(node);
      visited.add(trace);
    }
  }
  
  function addToParent(tree, subPaths, index, visited) {
    if (index > subPaths.length - 1) return;
  
    let trace = subPaths.slice(0, index + 1).join("/");
    let parentTrace = subPaths.slice(0, index).join("/");
    if (tree.trace === parentTrace) {
      // find it ,insert here
      let node = {
        name: subPaths[index],
        items: [],
        depth: tree.depth + 1,
        trace: trace
      };
      tree.items.push(node);
      visited.add(trace);
      return;
    }
  
    for (let i = 0; i < tree.items.length; i++) {
      addToParent(tree.items[i], subPaths, index, visited);
    }
  }
  
  function printTreeBFS(node, visited, nextqueue) {
    visited.add(node);
    node.items.forEach(e => nextqueue.push(e));
    if (nextqueue.length === 0) return;
    let nextNode = nextqueue[0];
    let newNextQueue = nextqueue.slice(1);
    printTreeBFS(nextNode, visited, newNextQueue);
  }
  
  export { buildTree, printTreeBFS };
  