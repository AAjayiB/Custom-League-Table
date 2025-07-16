
export const extractData = (teamData) => {
    if (teamData?.event){
        const filtered = teamData.event.filter(e => e.strLeague == "English Premier League")
        const resultData = {
            awayTeam: filtered[0].strAwayTeam,
            homeScore: parseInt(filtered[0].intHomeScore),
            awayScore: parseInt(filtered[0].intAwayScore)
        };
        return resultData;
    }
    else return undefined
    
};
