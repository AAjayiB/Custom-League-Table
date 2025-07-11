import axios from "axios"
import { extractDataResult } from "./teamListData"


describe('runs extractData', () => { 
    
    let teamData = axios.get('https://www.thesportsdb.com/api/v1/json/123/searchevents.php?s=2024-2025&e=Arsenal_vs_Chelsea')
    teamData = teamData.data
    test('should return a list of objects containing the scores of both', () => { 
        expect(teamData).toStrictEqual(extractDataResult)
     })

    test('should return a null list', () => { 
        expect(undefined).toStrictEqual(extractDataResult)
        expect({}).toStrictEqual(extractDataResult)
     })

   
 })