import React from 'react'
import { CLUBS } from '../assets/Clubs24-25'
const TeamForm = ({id, matchParameters, setMatchParameters, className}) => {
  return (
    <div className={className}>
    <label className='label text-black'>{id.toUpperCase()}: 
    <select defaultValue="Select a Team"  id={id} name={id} 
    onChange={(e) => setMatchParameters({...matchParameters, [id]: e.target.value })}
    className="select text-white">
        <option disabled={true}>Select a Team</option>
        {CLUBS.map((club,index) => (
            <option value={club} key={index}>{club} </option>
        ))}
    </select>
    </label>
    </div>
  )
}

export default TeamForm