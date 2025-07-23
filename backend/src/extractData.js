
export const extractData = (teamData,awayTeamName) => {
    if (teamData?.event){
        const filtered = teamData.event.filter(e => e.strLeague == "English Premier League")
        if(filtered.length > 0){
            const resultData = {
            awayTeam: awayTeamName,
            homeScore: parseInt(filtered[0].intHomeScore),
            awayScore: parseInt(filtered[0].intAwayScore)
            };
            return resultData;
        }

        return undefined
        
    }
    else return undefined
    
};
