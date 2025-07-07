export const getTeams = (teamList) => {
    teamList.forEach(team => {
        const filtered = teamList.filter(fTeamList => team != fTeamList);
        filtered.forEach(team2 => {
            console.log(team, team2);
        });

    });
};
