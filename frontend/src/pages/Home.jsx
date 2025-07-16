import React from 'react'
import LeagueTable from '../components/LeagueTable'
import Header from '../components/Header'
import TeamForm from '../components/TeamForm'
import {useQuery} from '@tanstack/react-query'
import { useNavigate } from 'react-router'

const Home = ({matchData, setMatchData}) => {
  
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/results')
  }
 
  const navigate = useNavigate()
  return (
    <>
        {/* <Header />  */}
        <form >
          <TeamForm id={'t1'}/>
          <TeamForm id={'t2'}/>
          <TeamForm id={'t3'}/>
          <TeamForm id={'t4'}/>
          <TeamForm id={'t5'}/>
          <TeamForm id={'t6'}/> 
          <button type='submit' className='btn btn-active' onClick={handleSubmit}>Create Table</button>
        </form>
    </>
  )
}

export default Home