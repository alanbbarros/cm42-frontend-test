import React, {useEffect, useState, useContext} from 'react'
import api from '../../services/api'
import { format, parseISO } from 'date-fns'
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
    console.log(appointmentsInfo);
    console.log(patientsInfo);

    return (
        <div className='history-container' >
            <h2>History</h2>

            <table>
                <thead>
                    <tr>
                        <th scope='col' >Date</th>
                        <th scope='col' >Status</th>
                        <th scope='col' >Patient</th>
                        <th scope='col' >Type</th>
                    </tr>
                </thead>

                <tbody>
                    {appointmentsInfo.map((item, index) =>{
                        const today = new Date()
                        let data = parseISO(item.startTime) 
                        let formatedData = format(data, "MM-dd-yyyy")
                        if(data < today){
                            return(
                                <tr className='table-row' key={index} >
                                    <td>
                                        <Link key={index} to={`/details/${item.patientId}`}>
                                            {formatedData} 
                                        </Link>
                                    </td>

                                    <td>
                                        <Link key={index} to={`/details/${item.patientId}`}>
                                            {item.status} 
                                        </Link>
                                    </td>

                                    <td>
                                        <Link key={index} to={`/details/${item.patientId}`}>
                                            {patientsInfo[item.patientId - 1].name}
                                        </Link>
                                    </td>

                                    <td>
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
