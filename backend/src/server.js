import express from 'express'
import axios from 'axios'
import cors from 'cors'
import { getTeamPairs } from './getTeamPairs.js'
import { extractData } from './extractData.js'

const app = express()

const corsOptions = {
    origin: 'http://localhost:5173',
    methods: 'GET'
}
app.use(cors(corsOptions))
app.use(express.json())

app.get('/', async (req,res) => { 
    
    try {
        // const teamList = req.query.teams.split(',')
        // max is 6 teams because of rate limiting constraints
        // to increase max teams add extra query parameter
        const queryTeams = [req.query.t1,req.query.t2,req.query.t3,req.query.t4,req.query.t5,req.query.t6]

        // remove undefined team parameters
        const teamList= queryTeams.filter(team => team)

        //create the object returned and use the valid team parameters as keys
        const matchData = {}
        teamList.forEach(team => {
            matchData[team]= []
        })

        // return permutations of the teams
        const teamPairs = getTeamPairs(teamList)

        // forEach doesn't return return promises with async so use map instead 
        // list of promises returned 
        const  matchDataPromises = teamPairs.map(async (pair) => {
            const teamData = await axios.get(
                `https://www.thesportsdb.com/api/v1/json/123/searchevents.php?s=2024-2025&e=${pair[0]}_vs_${pair[1]}`)
            
            const extractedData = extractData(teamData.data)
            matchData[pair[0]].push(extractedData)
        })

        // accept the list of promises
        await Promise.all(matchDataPromises)
       
        // send the match data
        res.status(200).json(matchData)
    } catch (error) {
        console.log('Error getting data\n(ERROR):',error)
        res.sendStatus(500)
    }
    
})

app.listen(5000, () => {
    console.log('Listening at PORT 5000')
})


