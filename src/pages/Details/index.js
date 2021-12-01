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
    const [patientAppointments, setPatientAppointments] = useState([]) 

    useEffect(() =>{
        const patientsInfo = localStorage.getItem('PatientsInfo')
        const appInfo = localStorage.getItem('AppointmentsInfo')


        if(patientsInfo && appInfo){
            setPatientsInfo(JSON.parse(patientsInfo))
            setAppointmentsInfo(JSON.parse(appInfo))
        }


    }, [])


    if(!patientsInfo || !patientAppointments){
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

                        </div>
                    </PatientCard>
                </div>
                <Tabs />

            </div>


        </div>
    )
}

export default Details
