import React, { useState } from 'react'
import TeamForm from '../components/TeamForm'
import { useNavigate } from 'react-router'


const Home = ({teams, setTeams}) => {
  const [matchParameters, setMatchParameters] = useState({
    t1:'',
    t2:'',
    t3:'',
    t4:'',
    t5:'',
    t6:'',
  })
  
  const navigate = useNavigate()
 
  const handleSubmit = (e) => {
    e.preventDefault()
    setTeams(matchParameters)
    console.log(teams)
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
            <button type='submit' className='btn btn-active' onClick={handleSubmit} disabled={!(matchParameters.t1 && matchParameters.t2) || matchParameters.t1 ==matchParameters.t2 }>Create Table</button>
          </form>
        </div>
    </>
  )
}

export default Home