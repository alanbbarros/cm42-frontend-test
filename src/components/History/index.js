import React, {useEffect, useState} from 'react'
import './history.css'
import api from '../../services/api'
import { format, parseISO } from 'date-fns'


const History = () => {

    //states
    const [appointmentsInfo, setAppointmentsInfo] = useState(null)
    const [patientsInfo, setPatientsInfo] = useState(null)


    useEffect(() =>{ //get data from the appointments when component loads

        async function loadAppointmentsData(){
            const response = await api.get('/appointments')
            const appointments = response.data
            sortInfoByData(appointments); 
            setAppointmentsInfo(appointments);
        }

        function sortInfoByData(appointments){ //sort the array of appointments by date 
            appointments.sort((a, b) => {
                return new Date(a.startTime) - new Date(b.startTime)
            })
        }

        loadAppointmentsData();
    }, [])


    useEffect(() =>{ //get data from the patients when component loads

        async function loadPatientsData(){
            const response = await api.get('./patients')
            const patients = response.data
            setPatientsInfo(patients)
        }
        loadPatientsData();
    }, [])

    
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
                                    <td> {formatedData} </td>
                                    <td> {item.status} </td>
                                    <td> {patientsInfo[item.patientId - 1].name} </td>
                                    <td> {item.type} </td>
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
