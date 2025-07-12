import { getTeamPairs } from "../src/getTeamPairs";
import { teamList1, teamList1Result, wrongTeamList1Result, teamList2, teamList2Result, wrongTeamList2Result } from "../src/teamListData";


describe('runs getTeamPairs', () => {
 
    it('should return a permutation of 2 teams', () => { 
        expect(getTeamPairs(teamList1)).toStrictEqual(teamList1Result)
        expect(getTeamPairs(teamList1)).not.toStrictEqual(wrongTeamList1Result)
    })

    it('should return a permutation of 3 teams', () => {
        expect(getTeamPairs(teamList2)).toStrictEqual(teamList2Result)
        expect(getTeamPairs(teamList2)).not.toStrictEqual(wrongTeamList2Result)
    })

    it('should return an empty list', () => {
        expect(getTeamPairs([])).toStrictEqual([])
        expect(getTeamPairs(['Arsenal'])).toStrictEqual([])
    })
 
})
