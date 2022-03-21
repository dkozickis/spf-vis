import { Node } from "./types";
import { RawNodeDatum } from "react-d3-tree/lib/types/common";

export const nodeToNodeDatum = (
  node: Node,
  transferAmount: string = ""
): RawNodeDatum => ({
  name: node.address,
  attributes: {
    balance: node.balance,
    linkText: transferAmount,
  },
  children: node.children.map(([amount, node]) =>
    nodeToNodeDatum(node, amount)
  ),
});
