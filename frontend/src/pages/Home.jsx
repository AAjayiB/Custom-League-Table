import React, { useState } from 'react'
import TeamForm from '../components/TeamForm'
import { useNavigate } from 'react-router'
import {ToastContainer, toast} from 'react-toastify'
import Header from '../components/Header'


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

  const uniqueParameters = () => {
    let listOfTeams = Object.values(matchParameters).filter(team => team)
    let numberOfTeams = listOfTeams.length
    let setOfTeams = new Set(listOfTeams)
    if(setOfTeams.size < numberOfTeams) return false
    return true
  } 
 
  const handleSubmit = (e) => {
    e.preventDefault()
    if(Object.values(matchParameters).filter(team => team) < 2){
      return toast('Please select at least 2 teams ')
    }
    if(!uniqueParameters()){
      return toast('Please make sure selected teams are unique')
    }
    setTeams(matchParameters)
    console.log(teams)
    navigate('/results')
  }

  
  
  return (
    <>
        <Header /> 
        <div>
          <form method='get'>
            <div className='md:flex'>
              <TeamForm id={'t1'} matchParameters={matchParameters} setMatchParameters={setMatchParameters} className={'flex justify-center m-3'}/>
              <TeamForm id={'t2'} matchParameters={matchParameters} setMatchParameters={setMatchParameters} className={'flex justify-center m-3'}/>
              <TeamForm id={'t3'} matchParameters={matchParameters} setMatchParameters={setMatchParameters}className={'flex justify-center m-3'}/>
              <TeamForm id={'t4'} matchParameters={matchParameters} setMatchParameters={setMatchParameters}className={'flex justify-center m-3'}/>
              <TeamForm id={'t5'} matchParameters={matchParameters} setMatchParameters={setMatchParameters}className={'flex justify-center m-3'}/>
              <TeamForm id={'t6'} matchParameters={matchParameters} setMatchParameters={setMatchParameters}className={'flex justify-center m-3'}/> 
            </div>
            <div className='flex justify-center'>
            <button type='submit' className='btn btn-active border-neutral-950 m-3' onClick={handleSubmit}>Create Table</button>
            </div>
          </form>
        </div>
        <ToastContainer />
    </>
  )
}

export default Home