import React from "react";
import "./styles.css";
import Tree from "./Tree";
import { buildTree } from "./treeUtil";

const data1 = [
  { filename: "aaa/sub1/sub2/test1.md" },
  { filename: "aaa/sub1/test2.md" },
  { filename: "aaa/sub1/sub2/sub3/test3.md" },
  { filename: "aaa/test4.md" }
];

const data2 = [
  { filename: "bbb/nbb/sub2/test5.md" },
  { filename: "bbb/test4.md" },
  { filename: "bbb/sub1/sub2/test5.md" }
];

export default function App() {
  let tree = buildTree(data2);
  let nextqueue = [];
  return (
    <Tree
      node={tree}
      paddingUnit={2}
      visited={new Set()}
      nextqueue={nextqueue}
    />
  );
}
