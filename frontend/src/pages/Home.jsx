import React, { useState } from 'react'
import LeagueTable from '../components/LeagueTable'
import Header from '../components/Header'
import TeamForm from '../components/TeamForm'
import {useQuery} from '@tanstack/react-query'
import { Form, useNavigate } from 'react-router'
import { getMatchData } from '../api/api'


const Home = ({matchData, setMatchData}) => {

  const [matchParameters, setMatchParameters] = useState({
    t1:'',
    t2:'',
    t3:'',
    t4:'',
    t5:'',
    t6:''
  })
  
  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault()
    const data = await getMatchData(matchParameters)
    setMatchData(data)
    console.log(matchData)
    navigate('/results')
    
  }
 
  return (
    <>
        {/* <Header />  */}
        <div className=''>
          <form method='get' >
            <TeamForm id={'t1'} matchParameters={matchParameters} setMatchParameters={setMatchParameters}/>
            <TeamForm id={'t2'} matchParameters={matchParameters} setMatchParameters={setMatchParameters}/>
            <TeamForm id={'t3'} matchParameters={matchParameters} setMatchParameters={setMatchParameters}/>
            <TeamForm id={'t4'} matchParameters={matchParameters} setMatchParameters={setMatchParameters}/>
            <TeamForm id={'t5'} matchParameters={matchParameters} setMatchParameters={setMatchParameters}/>
            <TeamForm id={'t6'} matchParameters={matchParameters} setMatchParameters={setMatchParameters}/> 
            {/* <button type='submit' className='btn btn-active' onClick={handleSubmit}>Create Table</button> */}
          </form>
        </div>
    </>
  )
}

export default Home