import type { NextPage } from "next";
import Head from "next/head";
import { useQuery } from "react-query";
import ky from "ky-universal";
import dynamic from "next/dynamic";
import { Node } from "../utils/types";

export const Tree = dynamic<{ data: Node }>(
  () => import("../utils/RenderTree").then((mod) => mod.RenderTree),
  {
    ssr: false,
  }
);

const Home: NextPage = () => {
  const { data } = useQuery<{ node: Node }>("spf", () =>
    ky("/api/spf").json<{ node: Node }>()
  );

  return (
    <>
      <Head>
        <title>Ayyyyy da SPF</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-full w-full">
        {data?.node ? <Tree data={data?.node} /> : <div>Loading...</div>}
      </div>
    </>
  );
};

export default Home;
