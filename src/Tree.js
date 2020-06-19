import React from "react";
import { FaChevronRight } from "react-icons/fa";

// node: { name: '', items: '', depth: 0}
// visited: Set
// nextqueue: array
function Tree(props) {
  const { node, paddingUnit } = props;

  const renderDFS = () => {
    const style = {
      marginLeft: node.depth * 30 + "px",
      display: "inline-block"
    };

    if (!node) {
      return " ";
    }

    return (
      <div>
        {node.items && node.items.length > 0 ? (
          <span style={style}>
            <FaChevronRight />
            {node.name}
          </span>
        ) : (
          <span style={style}>{node.name}</span>
        )}
        {node.items.map(item => {
          return <Tree node={item} paddingUnit={paddingUnit} />;
        })}
      </div>
    );
  };

  return renderDFS();
}

export default Tree;
