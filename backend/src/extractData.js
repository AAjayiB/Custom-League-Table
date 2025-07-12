
export const extractData = (teamData) => {
    const matches = [];
    if (teamData?.event){
        teamData.event.filter(e => e.strLeague == "English Premier League")
        .forEach(matchData => {
            const resultData = {
                homeTeam: matchData.strHomeTeam,
                awayTeam: matchData.strAwayTeam,
                homeScore: parseInt(matchData.intHomeScore),
                awayScore: parseInt(matchData.intAwayScore)
            };
            matches.push(resultData);
        });
    }
    return matches;
};
