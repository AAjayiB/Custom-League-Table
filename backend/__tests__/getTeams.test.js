import { getTeams } from "../src/getTeams";


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

describe('runs getTeams', () => {
 
    test('should return a permutation of 2 teams', () => { 
        expect(getTeams(teamList1)).toStrictEqual(teamList1Result)
        expect(getTeams(teamList1)).not.toStrictEqual(wrongTeamList1Result)
    })

    test('should return a permutation of 3 teams', () => {
        expect(getTeams(teamList2)).toStrictEqual(teamList2Result)
        expect(getTeams(teamList2)).not.toStrictEqual(wrongTeamList2Result)
    })

    test('should return an empty list', () => {
        expect(getTeams([])).toStrictEqual([])
        expect(getTeams(['Arsenal'])).toStrictEqual([])
    })
 
})
