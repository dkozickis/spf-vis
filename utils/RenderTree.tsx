import Tree from "react-d3-tree";
import { useEffect, useRef, useState } from "react";

import { nodeToNodeDatum } from "./nodeToNodeDatum";

import { select } from "d3";
import { PureSvgNodeElement, straightPathFunc } from "./d3";
import { Node } from "./types";

export const RenderTree = ({ data }: { data: Node }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState<
    undefined | { width: number; height: number }
  >();

  useEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current?.getBoundingClientRect();
      setDimensions({ width, height });
    }
  }, []);

  return (
    <div id="treeWrapper" className="h-full w-full" ref={containerRef}>
      <Tree
        data={nodeToNodeDatum(data)}
        renderCustomNodeElement={PureSvgNodeElement}
        dimensions={dimensions}
        translate={{
          x: (dimensions?.width ?? 0) / 2,
          y: (dimensions?.height ?? 0) / 2,
        }}
        pathFunc={straightPathFunc}
        linkTextFunc={(linkData, id) => {
          if (!linkData.target.data.attributes?.linkText) {
            return null;
          }

          return (
            <text textAnchor="middle" className="link" dy={-5}>
              <textPath href={`#${id}`} startOffset="50%" className="linkText">
                {linkData.target.data.attributes.linkText}
              </textPath>
            </text>
          );
        }}
        nodeSize={{ x: 300, y: 300 }}
      />
    </div>
  );
};
