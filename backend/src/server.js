import express from 'express'
import axios from 'axios'
// import { getTeamsPairs } from './getTeamPairs.js'


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
    // const teamData = axios.get(`https://www.thesportsdb.com/api/v1/json/123/searchevents.php?s=2024-2025&e=${req.params.teams[0][0]}_vs_${req.params.teams[0][1]}`)
    // res.json(teamData.data)
    const teamList = req.query.teams.split(',')
    console.log(teamList)
    res.json({Teams: teamList})

})

app.listen(5000, () => {
    console.log('Listening at PORT 5000')
})