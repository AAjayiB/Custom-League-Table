import { useState } from 'react'
import LeagueTable from './components/LeagueTable'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Result from './pages/Result'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/results' element={<Result />} />
    </Routes>
  )
}

export default App
