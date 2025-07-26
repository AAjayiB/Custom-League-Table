import React from "react";
import LeagueTableSlot from "./LeagueTableSlot";
import "../styles/LeagueTable.css";

const LeagueTable = ({ teams }) => {
  return (
    <div className="overflow-x-auto rounded-box py-10 m-10">
      <table className="table table-zebra">
        <thead className="bg-black">
          <tr>
            <th>#</th>
            <th>Team</th>
            <th>MP</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>Pts</th>
            <th>GF</th>
            <th>GA</th>
            <th>GD</th>
          </tr>
        </thead>

        <tbody className="even:bg-blue-500 odd:bg-amber-">
          {teams.map((team, index) => (
            <LeagueTableSlot index={index} team={team} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeagueTable;
