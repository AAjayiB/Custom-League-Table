import { useState } from 'react'
import LeagueTable from './components/LeagueTable'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Result from './pages/Result'

function App() {
  const [teams, setTeams] = useState({})

  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]">
    <Routes>
      <Route path='/' element={<Home teams={teams} setTeams={setTeams} />} />
      <Route path='/results' element={<Result teams={teams}/>} />
    </Routes>
    </div>
  )
}

export default App
