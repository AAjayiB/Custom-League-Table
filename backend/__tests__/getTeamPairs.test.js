import { getTeamPairs } from "../src/getTeamPairs";


const teamList1 = ['Arsenal', 'Chelsea'];
const teamList1Result = [['Arsenal','Chelsea'],["Chelsea",'Arsenal']]
const wrongTeamList1Result = [['Arsenal','Chelsea'],["Chlsea",'rsenal']]
const teamList2 = ['Arsenal', 'Chelsea','Liverpool'];
const teamList2Result = [['Arsenal','Chelsea'],['Arsenal','Liverpool'],
["Chelsea",'Arsenal'],['Chelsea','Liverpool'],
['Liverpool','Arsenal'],['Liverpool',"Chelsea"]]
const wrongTeamList2Result = [['Arsenal','Liverpool'],['Arsenal','Liverpool'],
["Chelsea",'Arsenal'],['Chelsea','Liverpool'],
['Liverpool','Arsenal'],['Liverpool',"Chelsea"]]

describe('runs getTeamPairs', () => {
 
    test('should return a permutation of 2 teams', () => { 
        expect(getTeamPairs(teamList1)).toStrictEqual(teamList1Result)
        expect(getTeamPairs(teamList1)).not.toStrictEqual(wrongTeamList1Result)
    })

    test('should return a permutation of 3 teams', () => {
        expect(getTeamPairs(teamList2)).toStrictEqual(teamList2Result)
        expect(getTeamPairs(teamList2)).not.toStrictEqual(wrongTeamList2Result)
    })

    test('should return an empty list', () => {
        expect(getTeamPairs([])).toStrictEqual([])
        expect(getTeamPairs(['Arsenal'])).toStrictEqual([])
    })
 
})
