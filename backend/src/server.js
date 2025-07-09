import express from 'express'
import axios from 'axios'
import { getTeamPairs } from './getTeamPairs.js'


// export const teams = ['Arsenal', 'Chelsea', 'Liverpool']

// const getData = async () => {
//     const res = await axios.get('https://www.thesportsdb.com/api/v1/json/123/searchevents.php?e=Arsenal_vs_Chelsea&s=2016-2017')
    
//     console.log(res.data)
// }

// // getData()

// getTeams(teams)

const app = express()

app.use(express.json())



app.get('/',async (req,res) => { 
    // res.json(teamData.data)
    const teamList = req.query.teams.split(',')
    
    const matches = []
    const pair = getTeamPairs(teamList)
    // teamPairs.forEach(async (pair) => {
    //     const teamData = await axios.get(
    //         `https://www.thesportsdb.com/api/v1/json/123/searchevents.php?s=2024-2025&e=${pair[0]}_vs_${pair[1]}`)
    // })
    const teamData = await axios.get(
            `https://www.thesportsdb.com/api/v1/json/123/searchevents.php?s=2024-2025&e=${pair[0][0]}_vs_${pair[0][1]}`)
    teamData.data.event.filter(e =>e.strLeague =="English Premier League")
        .forEach(matchData => {
        const resultData ={
            homeTeam:matchData.strHomeTeam,
            awayTeam:matchData.strAwayTeam,
            homeScore:matchData.intHomeScore,
            awayScore:matchData.intAwayScore
        }
        matches.push(resultData)
    });
    
    console.log(matches)
    res.json(matches)

})

app.listen(5000, () => {
    console.log('Listening at PORT 5000')
})