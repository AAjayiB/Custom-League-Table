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
    homeTeam: 'Arsenal',
    awayTeam: 'Chelsea',
    homeScore: 1,
    awayScore: 0
}

export const extractDataResult2 = {
    homeTeam: 'Arsenal',
    awayTeam: 'Liverpool',
    homeScore: 2,
    awayScore: 2
}
