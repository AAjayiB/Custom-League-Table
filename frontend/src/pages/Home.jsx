import React from 'react'
import LeagueTable from '../components/LeagueTable'

const teams = ['Arsenal','Chelsea','Liverpool']
const Home = () => {
  return (
    <>
      <LeagueTable teams={teams} />
    </>
  )
}

export default Home