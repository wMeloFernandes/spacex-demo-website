"use client";

import apiCalls from "@/graphql";
import { ShipsQuery } from "@/util/types/graphql";
import { useQuery } from "@apollo/client";
import { ShipCard } from "./components/ShipCard";
import { Spinner } from "./components/Spinner";

export default function Home() {
  const { data, loading } = useQuery<ShipsQuery>(apiCalls.queries.ships, {
    fetchPolicy: "cache-and-network",
    variables: {
      input: {
        pagination: {
          limit: 50,
          offset: 1
        }
      }
    }
  });

  return (
    <main className="flex justify-center min-h-screen p-14 bg-gradient-to-r from-purple-500 to-pink-500">
      <Spinner isLoading={loading} />
      {!loading && <div className="w-full max-w-7xl justify-between flex flex-col gap-2">
        {data?.ships?.map((ship) => (
          <ShipCard key={ship.id} name={ship.name} missions={[]} image={ship.image}></ShipCard>
        ))}
      </div>}
    </main>
  );
}
