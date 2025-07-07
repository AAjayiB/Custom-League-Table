import express from 'express'
import axios from 'axios'

const teams = ['Arsenal', 'Chelsea', 'Liverpool']

const getTeams = (teamList) => {
    teamList.forEach(team =>{
        const filtered = teams.filter(fTeamList => team != fTeamList )
        filtered.forEach(team2 => {
            console.log(team,team2)
        })
        
    })
}

const getData = async () => {
    const res = await axios.get('https://www.thesportsdb.com/api/v1/json/123/searchevents.php?e=Arsenal_vs_Chelsea&s=2016-2017')
    
    console.log(res.data)
}

// getData()

getTeams(teams)