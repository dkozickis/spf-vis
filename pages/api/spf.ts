// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Node } from "../../utils/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ node: Node }>
) {
  // const data = await fetch(
  //   "https://spf-staging.parsiq.net/track-funds-a0f15dc5-5b87-411f-ac70-3ee7b279ab3b"
  // ).then((res) => res.json());

  res.status(200).json({
    node: {
      address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
      balance: "1000",
      children: [
        [
          "100",
          {
            address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
            balance: "2000",
            children: [],
          },
        ],
        [
          "200",
          {
            address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
            balance: "30000",
            children: [
              [
                "100",
                {
                  address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
                  balance: "2000",
                  children: [],
                },
              ],
              [
                "200",
                {
                  address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
                  balance: "30000",
                  children: [],
                },
              ],
            ],
          },
        ],
      ],
    },
  });
}
