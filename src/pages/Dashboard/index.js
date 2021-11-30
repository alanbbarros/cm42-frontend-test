import React, {useEffect, useContext, useState} from 'react'
import { dataContext } from '../../context'
import Sidebar from '../../components/Sidebar'
import Calendar from '../../components/Calendar'
import History from '../../components/History'
import api from '../../services/api'
import './dashboard.css'

const Dashboard = () => {

    const {setAppointmentsInfo, setPatientsInfo} = useContext(dataContext);

    useEffect(() =>{

        async function loadAppointmentsInfo(){
            await api.get('/appointments')
            .then((response) =>{
                const appointments = response.data
                sortInfoByData(appointments)
                setAppointmentsInfo(appointments)
                localStorage.setItem('AppointmentsInfo', JSON.stringify(appointments))
            })
        }

        function sortInfoByData(appointments){ 
            appointments.sort((a, b) => {
                return new Date(a.startTime) - new Date(b.startTime)
            })
        }

        loadAppointmentsInfo();

    }, [])

    useEffect(() =>{

        async function loadPatientsInfo(){
            await api.get('/patients')
            .then((response) =>{
                setPatientsInfo(response.data)
                localStorage.setItem('PatientsInfo', JSON.stringify(response.data))

            })
        }
        loadPatientsInfo();

    }, [])


    return (
        <div className='dashboard-container' >
            <div className='left' >
                <Sidebar />
            </div>

            <div className='right' >
                <h2>Dashboard</h2>
                <Calendar />
                <History />
            </div>
        </div>
    )
}

export default Dashboard
