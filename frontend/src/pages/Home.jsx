import React from 'react'
import LeagueTable from '../components/LeagueTable'
import Header from '../components/Header'
import TeamForm from '../components/TeamForm'


const Home = ({matchData, setMatchData}) => {
  return (
    <>
        {/* <Header />  */}
        <form >
          <TeamForm />
          {/* <TeamForm />
          <TeamForm />
          <TeamForm />
          <TeamForm />
          <TeamForm /> */}
        </form>
    </>
  )
}

export default Home