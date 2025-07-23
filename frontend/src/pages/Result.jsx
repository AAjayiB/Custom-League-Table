import React from 'react'
import LeagueTable from '../components/LeagueTable'
import Header from '../components/Header'
import {useQuery} from '@tanstack/react-query'
import { getMatchData } from '../api/api'
const Result = ({teams}) => {

  // const getMatchData2 = getMatchData(teams)
  
  const {data, status, error, isLoading} = useQuery({
    queryKey: ['matches'],
    queryFn: async () => {
      const dd = await getMatchData(teams)
      return dd
    }

  })
  console.log(data)
  if (isLoading) {
    return <span>Loading...</span>
  }

  if (status === 'error') {
    return <span>Error: {error.message}</span>
  }
  
  return (
    <>
    {/* <Header /> */}
      <LeagueTable teams={data} />
      {/* <div>{JSON.stringify(data)}</div> */}
    </>
  )
}

export default Result