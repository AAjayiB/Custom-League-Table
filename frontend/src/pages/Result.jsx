import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getMatchData } from "../api/api";
import LeagueTable from "../components/LeagueTable";
import Header from "../components/Header";

const Result = ({ teams }) => {
  // const getMatchData2 = getMatchData(teams)

  const { data, status, error, isLoading } = useQuery({
    queryKey: ["matches"],
    queryFn: async () => {
      const dd = await getMatchData(teams);
      return dd;
    },
  });
  console.log(data);
  if (isLoading) {
    return (
      <>
        <Header />
        <div className="skeleton h-50 m-10  bg-violet-50"></div>
      </>
    );
  }

  if (status === "error") {
    return (
      <>
        <Header />
        <div className="text-black text-3xl text-center">
          Error: {error.message}
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <LeagueTable teams={data} />
    </>
  );
};

export default Result;
