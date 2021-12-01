import React, {useEffect, useContext} from 'react'
import {dataContext} from '../../context/index'
import CalendarItem from '../CalendarItem'
import './calendar.css'

const Calendar = () => {


    const {weekAppointments} = useContext(dataContext);

    useEffect(() =>{
        console.log(weekAppointments);
    }, [weekAppointments])

    return (
        <>
        <div className='calendar-container' >
            <h2>Calendar</h2>

            <table className='calendar-table' >
                <thead>
                    <tr>
                        <th scope='col' className='empty-col' ></th>
                        <th scope='col' className='tableheader'>Mon</th>
                        <th scope='col' className='tableheader' >Tue</th>
                        <th scope='col' className='tableheader' >Wed</th>
                        <th scope='col' className='tableheader' >Thu</th>      
                        <th scope='col' className='tableheader' >Fri</th>                   
                    </tr>
                </thead>
                <tbody>
                <tr className='calendar-row' > 
                    <th>09:00</th>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                </tr>
                <tr>
                    <th>09:30</th>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                </tr>
                <tr>
                    <th>10:00</th>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                </tr>
                <tr>
                    <th>10:30</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th>11:00</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th>11:30</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th>12:00</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th>12:30</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th>13:00</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th>13:30</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th>14:00</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th>14:30</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th>15:00</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th>15:30</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th>16:00</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th>16:30</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th>17:00</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th>17:30</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th>18:00</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                </tbody>

            </table>

        </div>
        </>
    )
}

export default Calendar
