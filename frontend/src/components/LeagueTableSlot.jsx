import React from "react";

const LeagueTableSlot = ({ index, team }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{team.team}</td>
      <td>{team.matchesPlayed}</td>
      <td>{team.wins}</td>
      <td>{team.draws}</td>
      <td>{team.losses}</td>
      <td>{team.points}</td>
      <td>{team.goalFor}</td>
      <td>{team.goalAgainst}</td>
      <td>{team.goalDiff}</td>
    </tr>
  );
};

export default LeagueTableSlot;
