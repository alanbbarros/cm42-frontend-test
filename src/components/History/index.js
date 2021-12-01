import React, {useEffect, useState, useContext} from 'react'
import api from '../../services/api'
import { format, parseISO, getHours, getMinutes } from 'date-fns'
import { Link } from 'react-router-dom'
import { dataContext } from '../../context'
import './history.css'



const History = () => {

    const {appointmentsInfo, patientsInfo} = useContext(dataContext)


    if(!appointmentsInfo || !patientsInfo){
        return(
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }


    return (
        <div className='history-container' >
            <h2>History</h2>

            <table>
                <thead>
                    <tr>
                        <th scope='col' >Date</th>
                        <th scope='col' className='removable' >Status</th>
                        <th scope='col' >Patient</th>
                        <th scope='col' className='removable' >Type</th>
                    </tr>
                </thead>

                <tbody>
                    {appointmentsInfo.map((item, index) =>{

                        const today = new Date()

                        let data = parseISO(item.startTime) 
                        let formatedData = format(data, "MM/dd/yyyy")

                        let hoursStart = getHours(data)
                        let minutesStart = getMinutes(data) ? getMinutes(data) : '00' // if the appointment starts at "X:00", transform 0 in 00 for a better display 

                        let hoursEnd = item.endTime ? getHours(parseISO(item.endTime)) : null
                        let minutesEnd = getMinutes(item.endTime) ? getMinutes(item.endTime) : '00'


                        if(data < today){
                            return(
                                <tr className='table-row' key={index} >
                                    <td>
                                        <Link key={index} to={`/details/${item.patientId}`}>
                                            {formatedData} {`${hoursStart}:${minutesStart}`} {hoursEnd ? `- ${hoursEnd}:${minutesEnd}` : ''}
                                        </Link>
                                    </td>

                                    <td className='removable' >
                                        <Link
                                        className={item.status === 'completed' ? 'status-column completed' : (item.status === 'absent') ? 'status-column absent' : 'status-column'}
                                        key={index}
                                        to={`/details/${item.patientId}`}
                                        >
                                            {item.status} 
                                        </Link>
                                    </td>

                                    <td>
                                        <Link key={index} to={`/details/${item.patientId}`}>
                                            {patientsInfo[item.patientId - 1].name}
                                        </Link>
                                    </td>

                                    <td className='removable' >
                                        <Link key={index} to={`/details/${item.patientId}`}>
                                            {item.type} 
                                        </Link>
                                    </td>
                                </tr>
                            )
                        }
                        return null
                    })}
                </tbody>
            </table>


        </div>
    )
}

export default History
