import React, {useEffect, useState, useContext} from 'react'
import PatientList from '../PatientList'
import {dataContext} from '../../context/index'
import './sidebar.css'

const Sidebar = () => {

    const {patientsInfo} = useContext(dataContext)

    return (
        <>
        <div className='sidebar-container' >
            <h2>Patients</h2>
            <PatientList />
        </div>
        </>
    )
}

export default Sidebar
