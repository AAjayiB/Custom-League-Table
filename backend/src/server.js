import express from 'express'
import axios from 'axios'
import { getTeamPairs } from './getTeamPairs.js'
import { extractData } from './extractData.js'

const app = express()

app.use(express.json())

app.get('/', async (req,res) => { 
    
    try {
        const teamList = req.query.teams.split(',')
        const matchData = {}
        teamList.forEach(team => {
            matchData[team]= []
        })
        const teamPairs = getTeamPairs(teamList)

        // forEach doesn't return return promises with async so use map instead 
        const  matchDataPromises = teamPairs.map(async (pair) => {
            const teamData = await axios.get(
                `https://www.thesportsdb.com/api/v1/json/123/searchevents.php?s=2024-2025&e=${pair[0]}_vs_${pair[1]}`)
            
            const extractedData = extractData(teamData.data)
            matchData[pair[0]].push(extractedData)
        })
        await Promise.all(matchDataPromises)
        res.status(200).json(matchData)
    } catch (error) {
        console.log('Error getting data\n(ERROR):',error)
        res.sendStatus()
    }
    
})

app.listen(5000, () => {
    console.log('Listening at PORT 5000')
})


