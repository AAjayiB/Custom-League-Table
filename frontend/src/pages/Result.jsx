import React from 'react'
import LeagueTable from '../components/LeagueTable'
import Header from '../components/Header'

const Result = ({teams}) => {

  
  return (
    <>
    <Header />
      <LeagueTable teams={teams} />
    </>
  )
}

export default Result