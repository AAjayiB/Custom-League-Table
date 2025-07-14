import { useState } from 'react'
import LeagueTable from './components/LeagueTable'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Result from './pages/Result'

function App() {
  const [matchData, setMatchData] = useState({})

  return (
    <Routes>
      <Route path='/' element={<Home matchData={matchData} setMatchData={setMatchData} />} />
      <Route path='/results' element={<Result matchData={matchData}/>} />
    </Routes>
  )
}

export default App
