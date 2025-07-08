import express from 'express'
import axios from 'axios'
import { getTeams } from './getTeamPairs.js'

// export const teams = ['Arsenal', 'Chelsea', 'Liverpool']

// const getData = async () => {
//     const res = await axios.get('https://www.thesportsdb.com/api/v1/json/123/searchevents.php?e=Arsenal_vs_Chelsea&s=2016-2017')
    
//     console.log(res.data)
// }

// // getData()

// getTeams(teams)

const app = express()

app.get('/', (req,res) => {
    res.send('Home page')
})

app.listen(5000, () => {
    console.log('Listening at PORT 5000')
})