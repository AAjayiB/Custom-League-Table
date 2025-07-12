import axios from "axios"
import { extractDataResult } from "../src/teamListData"
import { extractData } from "../src/extractData"


describe('runs extractData', () => { 
    
    
    it('should return a list of objects containing the scores of both', async () => { 
        let teamData = await axios.get('https://www.thesportsdb.com/api/v1/json/123/searchevents.php?s=2024-2025&e=Arsenal_vs_Chelsea')
        const result = extractData(teamData.data)
        expect(result).toStrictEqual(extractDataResult)
    })

    it('should return an empty list if given a empty or undefined object', () => { 
        expect(extractData(undefined)).toStrictEqual([])
        expect(extractData({})).toStrictEqual([])
     })

    it('should return an empty list if the first team is invalid', async () => { 
        
        let teamData = await axios.get('https://www.thesportsdb.com/api/v1/json/123/searchevents.php?s=2024-2025&e=fyuebj_vs_Chelsea')
        const result = extractData(teamData.data)
        expect(result).toStrictEqual([])
    })

    it('should return an empty list if the second team is invalid', async () => { 
        let teamData = await axios.get('https://www.thesportsdb.com/api/v1/json/123/searchevents.php?s=2024-2025&e=Arsenal_vs_Hdjek')
        const result = extractData(teamData.data)
        expect(result).toStrictEqual([])
    })
   
 })