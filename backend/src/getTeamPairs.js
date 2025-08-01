export const getTeamPairs = (teamList) => {
  const teamPairs = [];
  if (teamList.length > 1) {
    teamList.forEach((team) => {
      const filtered = teamList.filter((fTeamList) => team != fTeamList);
      filtered.forEach((team2) => {
        teamPairs.push([team, team2]);
      });
    });
  }
  return teamPairs;
};
