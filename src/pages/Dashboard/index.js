import React, {useEffect, useContext} from 'react'
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
            const response = await api.get('/appointments')
            const appointments = response.data
            sortInfoByData(appointments)
            setAppointmentsInfo(appointments)

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
            const response = await api.get('/patients')
            setPatientsInfo(response.data)
        }
        loadPatientsInfo();
    }, [])

    return (
        <div className='dashboard-container' >
            <div className='left' >
                <Sidebar />
            </div>

            <div className='right' >
                <Calendar />
                <History />
            </div>
        </div>
    )
}

export default Dashboard
