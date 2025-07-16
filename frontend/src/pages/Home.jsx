import React, { useState } from 'react'
import LeagueTable from '../components/LeagueTable'
import Header from '../components/Header'
import TeamForm from '../components/TeamForm'
import {useQuery} from '@tanstack/react-query'
import { useNavigate } from 'react-router'

const Home = ({matchData, setMatchData}) => {

  const [matchParameters, setMatchParameters] = useState({
    t1:'',
    t2:'',
    t3:'',
    t4:'',
    t5:'',
    t6:''
  })
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // navigate('/results')
    console.log(matchParameters)
  }
 
  const navigate = useNavigate()
  return (
    <>
        {/* <Header />  */}
        <form >
          <TeamForm id={'t1'} matchParameters={matchParameters} setMatchParameters={setMatchParameters}/>
          <TeamForm id={'t2'} matchParameters={matchParameters} setMatchParameters={setMatchParameters}/>
          <TeamForm id={'t3'} matchParameters={matchParameters} setMatchParameters={setMatchParameters}/>
          <TeamForm id={'t4'} matchParameters={matchParameters} setMatchParameters={setMatchParameters}/>
          <TeamForm id={'t5'} matchParameters={matchParameters} setMatchParameters={setMatchParameters}/>
          <TeamForm id={'t6'} matchParameters={matchParameters} setMatchParameters={setMatchParameters}/> 
          <button type='submit' className='btn btn-active' onClick={handleSubmit}>Create Table</button>
        </form>
    </>
  )
}

export default Home