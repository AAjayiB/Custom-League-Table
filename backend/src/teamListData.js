export const teamList1 = ['Arsenal', 'Chelsea'];
export const teamList1Result = [['Arsenal', 'Chelsea'], ["Chelsea", 'Arsenal']];
export const wrongTeamList1Result = [['Arsenal', 'Chelsea'], ["Chlsea", 'rsenal']];
export const teamList2 = ['Arsenal', 'Chelsea', 'Liverpool'];
export const teamList2Result = [['Arsenal', 'Chelsea'], ['Arsenal', 'Liverpool'],
["Chelsea", 'Arsenal'], ['Chelsea', 'Liverpool'],
['Liverpool', 'Arsenal'], ['Liverpool', "Chelsea"]];
export const wrongTeamList2Result = [['Arsenal', 'Liverpool'], ['Arsenal', 'Liverpool'],
["Chelsea", 'Arsenal'], ['Chelsea', 'Liverpool'],
['Liverpool', 'Arsenal'], ['Liverpool', "Chelsea"]];

export const extractDataResult = {
    awayTeam: 'Chelsea',
    homeScore: 1,
    awayScore: 0
}

export const processDataResult1 = [
    {
    team:'Arsenal',
    matchesPlayed: 2,
    wins: 1,
    draws: 1,
    losses: 0,
    points: 4,
    goalFor: 2,
    goalAgainst: 1,
    goalDiff: 1
    },
    {
    team:'Chelsea',
    matchesPlayed: 2,
    wins: 0,
    draws: 1,
    losses: 1,
    points: 1,
    goalFor: 1,
    goalAgainst: 2,
    goalDiff: -1
    }
]
