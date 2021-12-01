import React, {useEffect, useContext, useState} from 'react'
import { dataContext } from '../../context';
import Sidebar from '../../components/Sidebar'
import PatientCard from '../../components/PatientCard'
import Tabs from '../../components/Tabs';
import {useHistory, useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { differenceInYears, parseISO, format } from 'date-fns';
import {AiOutlineHome} from 'react-icons/ai'
import './details.css'

const Details = () => {

    const {id} = useParams()
    const {setPatientsInfo, patientsInfo, appointmentsInfo, setAppointmentsInfo} = useContext(dataContext)

    const [patientAppointments, setPatientAppointments] = useState(null)
    const [patientPastAppointments, setPatientPastAppointments] = useState(null); 
    const [patientUpcomingAppointments, setPatientUpcomingAppointments] = useState(null);

    useEffect(() =>{

        const patientcookies = localStorage.getItem('PatientsInfo')
        const applicationcookies = localStorage.getItem('AppointmentsInfo')
        const patientAppointmentCookies = localStorage.getItem(`Patient ${id} appointment`)

        if(patientcookies && applicationcookies){
            setPatientsInfo(JSON.parse(patientcookies))
            setAppointmentsInfo(JSON.parse(applicationcookies))
        }

        if(patientAppointmentCookies){
            setPatientAppointments(JSON.parse(patientAppointmentCookies))
        }

    }, [id])

    useEffect(() =>{ 
        try{
            const patientapps = appointmentsInfo.filter(item => item.patientId === Number(id))
            setPatientAppointments(patientapps)
    
            const today = new Date()
    
            const history = patientapps.filter(item => (parseISO(item.startTime) < today))
            setPatientPastAppointments(history)
    
            const upcoming = patientapps.filter(item => parseISO(item.startTime) > today)
            setPatientUpcomingAppointments(upcoming)
    
            localStorage.setItem(`Patient ${id} appointment`, JSON.stringify(patientapps))
        }
        catch(e){
            console.log(e);
        }


    }, [id, appointmentsInfo])


    if(!patientsInfo || !patientAppointments || !patientPastAppointments){
        return(
            <h1>Loading...</h1>
        )
    }



    const birthday = parseISO(patientsInfo[id - 1].birthday)
    const age = differenceInYears(new Date(), birthday)
        


    return (
        <div className='details-container' >

            <div className='details-left' >
                <Sidebar />
            </div>

            <div className='details-right' >

                <h1>Details Page</h1>

                <div className='patientcard-container' >
                    <PatientCard>
                        <div className='card' >
                            <span>Patient Info</span>
                            <h2> {patientsInfo[id - 1].name} </h2>
                            <div>
                                <span>{patientsInfo[id - 1].document}</span> 
                                <span> {age}y/o </span>
                            </div>

                        </div>
                    </PatientCard>

                    <PatientCard>
                        <div className='card' >
                            <span>Plan Info</span>
                            <h2> {patientsInfo[id - 1].insurancePlan} </h2>
                            <span> {patientsInfo[id - 1].healthSystemId} </span>
                        </div>
                    </PatientCard>

                    <PatientCard>
                        <div className='card' >
                            <span>Latest App.</span>
                            <h2> {patientPastAppointments[patientPastAppointments.length-1].specialty} </h2>
                        </div>
                    </PatientCard>
                </div>
                <Tabs history={patientPastAppointments} upcoming={patientUpcomingAppointments} recent={patientAppointments.slice(0, 3)} />

            </div>


        </div>
    )
}

export default Details
