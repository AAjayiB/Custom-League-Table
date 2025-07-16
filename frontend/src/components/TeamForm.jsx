import React from 'react'
import { CLUBS } from '../assets/Clubs24-25'
const TeamForm = ({id, matchParameters, setMatchParameters}) => {
  return (
    <label className='label'>{id.toUpperCase()}: 
    <select defaultValue="Select a Team"  id={id} name={id} 
    onChange={(e) => setMatchParameters({...matchParameters, [id]: e.target.value })}
    className="select">
        <option disabled={true}>Select a Team</option>
        {CLUBS.map((club,index) => (
            <option value={club} key={index}>{club} </option>
        ))}
    </select>
    </label>
  )
}

export default TeamForm