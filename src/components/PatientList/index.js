import React, {useEffect, useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import {dataContext} from '../../context/index'
import './patientlist.css'


const PatientList = () => {

    const {patientsInfo} = useContext(dataContext); //api.get('/patients')
    const [currentPage, setCurrentPage] = useState(0)

    if(!patientsInfo){ 
        return(
            <h3>Loading...</h3>
        )
    }

    //variables to manipulate the pagination of the list of patiens at the sidebar

    const ITEMS_PER_PAGE = 10
    const pages = Math.ceil(patientsInfo.length / ITEMS_PER_PAGE)
    const startIndex = currentPage * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE
    const currentItems = patientsInfo.slice(startIndex, endIndex)

    return (
        <div className='patientlist' >

            {currentItems.map((item, index) =>{
                return(
                    <Link key={index} to={`/details/${item.id}`} >
                        <span  > {item.name} </span>
                    </Link>
                )
            })}

            <div className='list-btns' > 
                {Array.from(Array(pages), (item, index) =>{
                    return(
                        <button  key={index} value={index} onClick={e => setCurrentPage(Number(e.target.value))} > {index + 1} </button>
                    )
                })}
            </div>
        </div>
    )
}

export default PatientList
