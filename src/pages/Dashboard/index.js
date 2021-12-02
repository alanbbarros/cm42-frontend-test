import React, {useEffect, useContext} from 'react'
import { nextFriday, previousMonday, parseISO } from 'date-fns'
import {FaBars} from 'react-icons/fa'
import { dataContext } from '../../context'
import Sidebar from '../../components/Sidebar'
import Calendar from '../../components/Calendar'
import History from '../../components/History'
import api from '../../services/api'
import './dashboard.css'

const Dashboard = () => {

    const {appointmentsInfo, setAppointmentsInfo, setPatientsInfo, weekAppointments, setWeekAppointments} = useContext(dataContext);

    useEffect(() =>{ //when component loads, gets the info from all the appointments

        async function getAppointmentsInfo(){
            await api.get('/appointments')
            .then((response) =>{
                const appointments = response.data
                sortInfoByData(appointments) // to a better display in <History />
                setAppointmentsInfo(appointments)
                localStorage.setItem('AppointmentsInfo', JSON.stringify(appointments))
            })
        }

        function sortInfoByData(appointments){
            appointments.sort((a, b) => {
                return new Date(a.startTime) - new Date(b.startTime)
            })
        }

        getAppointmentsInfo();

    }, [])

    useEffect(() =>{ //when component loads, gets the info from all the patients

        async function getPatientsInfo(){
            await api.get('/patients')
            .then((response) =>{
                setPatientsInfo(response.data)
                localStorage.setItem('PatientsInfo', JSON.stringify(response.data))

            })
        }
        getPatientsInfo();

    }, [])

    useEffect(() =>{ //when component loads, get all the appointments of the current week

        async function getWeekAppointments(){
            await api.get('/appointments')
            .then((response) =>{

                const today = new Date();
                const monday = previousMonday(today)
                const friday = nextFriday(today)
                const appointments = response.data

                function checkDate(item){
                    return parseISO(item.startTime) > monday && parseISO(item.startTime) < friday
                }

                const filtered = appointments.filter(item => checkDate(item))
                setWeekAppointments(filtered)
            })
        }
        
        getWeekAppointments();
    }, [])


    return (
        <div className='dashboard-container' >
            <div className='left' >

                <div className='sidebar' >
                    <Sidebar />
                </div>

                <FaBars className='bars' size={35} />

            </div>

            <div className='right' >
                <h4>Dashboard  </h4>
                <Calendar />
                <History />
            </div>
        </div>
    )
}

export default Dashboard
