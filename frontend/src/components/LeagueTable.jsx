import React from 'react'
import LeagueTableSlot from './LeagueTableSlot'

const LeagueTable = ({teams}) => {
  return (
    <div className='overflow-x-auto rounded-box  size-200'>
        <table className='table table-zebra'>
            <thead className='bg-black'>
                <tr>
                    <th>
                        #
                    </th>
                    <th>
                        Team
                    </th>
                    <th>
                        MP
                    </th>
                    <th>
                        W
                    </th>
                    <th>
                        D
                    </th>
                    <th>
                        L
                    </th>
                    <th>
                        Pts
                    </th>
                    <th>
                        GF
                    </th>
                    <th>
                        GA
                    </th>
                    <th>
                        GD
                    </th>
                </tr>
            </thead>
           
            <tbody>
                {teams.map(() => (
                   <LeagueTableSlot />
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default LeagueTable