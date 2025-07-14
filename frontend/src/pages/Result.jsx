import React from 'react'
import LeagueTable from '../components/LeagueTable'
import Header from '../components/Header'

const Result = ({matchData}) => {

  const teams = ['Arsenal','Chelsea','Liverpool']
  return (
    <>
    <Header />
      <LeagueTable teams={teams} />
    </>
  )
}

export default Result