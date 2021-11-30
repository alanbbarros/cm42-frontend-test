import React, {useEffect, useContext} from 'react'
import { dataContext } from '../../context';
import Sidebar from '../../components/Sidebar'
import {useHistory, useParams} from 'react-router-dom';
import './details.css'

const Details = () => {

    const {id} = useParams()
    const {appointmentsInfo, patientsInfo} = useContext(dataContext)

    

    return (
        <div className='details-container' >
            <div className='details-left' >
                <Sidebar />
            </div>
            <div className='details-right' >
                <h2>Details Page</h2>
            </div>

        </div>
    )
}

export default Details
