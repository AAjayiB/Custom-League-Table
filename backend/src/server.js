import express from 'express'
import axios from 'axios'
import { getTeamPairs } from './getTeamPairs.js'
import { extractData } from './extractData.js'


// export const teams = ['Arsenal', 'Chelsea', 'Liverpool']

// const getData = async () => {
//     const res = await axios.get('https://www.thesportsdb.com/api/v1/json/123/searchevents.php?e=Arsenal_vs_Chelsea&s=2016-2017')
    
//     console.log(res.data)
// }

// // getData()

// getTeams(teams)

const app = express()

app.use(express.json())



app.get('/', (req,res) => { 
    
    let matches = []
    const teamList = req.query.teams.split(',')
    const teamPairs = getTeamPairs(teamList)
    teamPairs.forEach(async (pair) => {
        const teamData = await axios.get(
            `https://www.thesportsdb.com/api/v1/json/123/searchevents.php?s=2024-2025&e=${pair[0]}_vs_${pair[1]}`)
        matches = extractData(teamData.data)
        res.sendStatus(200).json(matches)
    })
    
    // const teamData = await axios.get(
    //         `https://www.thesportsdb.com/api/v1/json/123/searchevents.php?s=2024-2025&e=${pair[0][0]}_vs_${pair[0][1]}`)
    
    
    console.log(matches)
    res.json(matches)

})

app.listen(5000, () => {
    console.log('Listening at PORT 5000')
})


