import React, {useContext, useState} from 'react'
import {dataContext} from '../../context/index'
import './calendaritem.css'

const CalendarItem = () => {

    const {weekAppointments} = useContext(dataContext);

    return (
        <div className='calendaritem-container' >
            
        </div>
    )
}

export default CalendarItem
