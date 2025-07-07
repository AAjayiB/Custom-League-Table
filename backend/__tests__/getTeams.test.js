import { getTeams } from "../src/getTeams";

test('should return a permutation of teams in the list', () => { 
    expect(getTeams(['Arsenal','Chelsea'])).toBe(console.log('Arsenal Chelsea\n Chelsea Arsenal'))
 })