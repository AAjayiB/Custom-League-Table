import axios from 'axios'
import { processData } from "../src/processData";
import { extractDataResult, processDataResult1, processDataResult2 } from "../src/teamListData";
import { extractData } from '../src/extractData';


describe('runs processData', () => { 
    it('should take an undefined object and return an empty list', () => {
        const extractedData = extractData(undefined)
        const result = processData(extractedData)
        expect(result).toStrictEqual([])

    });

    it('should take an object, perform the appropriate calculations and return a list of 2 objects ', () => {
        const extractedData = {
            Chelsea: [ { awayTeam: 'Arsenal', homeScore: 1, awayScore: 1 } ],
            Arsenal: [ { awayTeam: 'Chelsea', homeScore: 1, awayScore: 0 } ]
        }
        const result = processData(extractedData)
        expect(result).toStrictEqual(processDataResult1)
    });

    it('should take an object, perform the appropriate calculations and return a list of 3 objects ', () => {
        const extractedData = {
            Liverpool: [ { awayTeam: 'Chelsea', homeScore: 2, awayScore: 1 }, 
                 { awayTeam: 'Arsenal', homeScore: 2, awayScore: 2 }],
            Arsenal: [ { awayTeam: 'Chelsea', homeScore: 1, awayScore: 0 }, 
                 { awayTeam: 'Liverpool', homeScore: 2, awayScore: 2 }],
            Chelsea: [ { awayTeam: 'Arsenal', homeScore: 1, awayScore: 1 }, 
                { awayTeam: 'Liverpool', homeScore: 3, awayScore: 1 } ]
        }
        const result = processData(extractedData)
        expect(result).toStrictEqual(processDataResult2)
    });
 })