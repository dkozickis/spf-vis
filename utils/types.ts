export type Node = {
  address: string; // BTC address :sweat_smile:
  balance: string; // satoshi
  children: Edge[];
};

type Edge = [string, Node]; // [satoshi_amount, Node]
