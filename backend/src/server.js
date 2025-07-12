import express from 'express'
import axios from 'axios'
import { getTeamPairs } from './getTeamPairs.js'
import { extractData } from './extractData.js'

const app = express()

app.use(express.json())

app.get('/', (req,res) => { 
    
    try {
        let matches = []
        const teamList = req.query.teams.split(',')
        const teamPairs = getTeamPairs(teamList)
        teamPairs.forEach(async (pair) => {
            const teamData = await axios.get(
                `https://www.thesportsdb.com/api/v1/json/123/searchevents.php?s=2024-2025&e=${pair[0]}_vs_${pair[1]}`)
            matches = extractData(teamData.data)
            res.sendStatus(200).json(matches)
        })
    } catch (error) {
        console.log('Error getting data\n(ERROR):',error)
        res.sendStatus()
    }
    
})

app.listen(5000, () => {
    console.log('Listening at PORT 5000')
})


