import React, {useEffect, useState, useContext} from 'react'
import PatientList from '../PatientList'
import {dataContext} from '../../context/index'
import { Link } from 'react-router-dom'
import {AiOutlineHome} from 'react-icons/ai'
import './sidebar.css'

const Sidebar = () => {

    const {patientsInfo} = useContext(dataContext)

    return (
        <>
        <div className='sidebar-container active' >
            <div className='sidebar-header' >
                <Link to='/' >
                    <AiOutlineHome size={25} />
                </Link>
                <h2>Patients</h2>
            </div>
            <PatientList />
        </div>
        </>
    )
}

export default Sidebar
