import React, {useEffect, useContext} from 'react'
import { dataContext } from '../../context';
import {useHistory, useParams} from 'react-router-dom';
import './details.css'

const Details = () => {

    const {id} = useParams()
    const {appointmentsInfo, patientsInfo} = useContext(dataContext)

    

    return (
        <div>
            <h1>
                {patientsInfo[id - 1].name}
            </h1>
        </div>
    )
}

export default Details
