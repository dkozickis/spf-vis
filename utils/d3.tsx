import {
  PathFunction,
  RenderCustomNodeElementFn,
} from "react-d3-tree/lib/types/common";
import { linkHorizontal } from "d3";

const textLayout = {
  horizontal: {
    title: {
      textAnchor: "middle",
      y: 40,
    },
    attributes: { textAnchor: "start", y: -10 },
    attribute: {
      textAnchor: "middle",
      dy: -25,
    },
  },
};

export const straightPathFunc: PathFunction = (linkDatum, orientation) => {
  const { source, target } = linkDatum;

  const linkPath = linkHorizontal()({
    source: [source.y, source.x],
    target: [target.y, target.x],
  }) as string;

  return linkPath;
};

export const PureSvgNodeElement: RenderCustomNodeElementFn = ({
  nodeDatum,
  toggleNode,
  onNodeClick,
}) => (
  <>
    <circle r={30} onClick={toggleNode} className="node" />
    <g className="rd3t-label">
      <text
        className="rd3t-label__title text-xs"
        {...textLayout.horizontal.title}
        onClick={onNodeClick}
      >
        {nodeDatum.name}
      </text>
      <text
        className="rd3t-label__attributes text-xs text-green-400"
        {...textLayout.horizontal.attributes}
      >
        {nodeDatum.attributes &&
          Object.entries(nodeDatum.attributes)
            .filter(([name]) => name === "balance")
            .map(([labelKey, labelValue], i) => (
              <tspan
                className="balance"
                key={`${labelKey}-${i}`}
                {...textLayout.horizontal.attribute}
              >
                {labelValue}
              </tspan>
            ))}
      </text>
    </g>
  </>
);
