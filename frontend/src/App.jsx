import { useState } from 'react'
import LeagueTable from './components/LeagueTable'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Result from './pages/Result'

function App() {
  const [teams, setTeams] = useState({})

  return (
    <Routes>
      <Route path='/' element={<Home teams={teams} setTeams={setTeams} />} />
      <Route path='/results' element={<Result teams={teams}/>} />
    </Routes>
  )
}

export default App
