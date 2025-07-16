import React from 'react'
import { CLUBS } from '../assets/Clubs24-25'
const TeamForm = ({id, matchParameters, setMatchParameters}) => {
  return (
    
    <select defaultValue="Pick a color" className="select" id={id} name={id} 
    onChange={(e) => setMatchParameters({...matchParameters, [id]: e.target.value })}>
        <option disabled={true}>Pick a color</option>
        {CLUBS.map(club => (
            <option> {club} </option>
        ))}
    </select>
    
  )
}

export default TeamForm