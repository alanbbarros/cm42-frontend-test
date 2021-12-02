import React, {useContext} from 'react'
import {dataContext} from '../../context/index'
import {parseISO} from 'date-fns/'
import CalendarItem from '../CalendarItem'
import './calendar.css'

const Calendar = () => {

    // Unfortunately I don't have enough knowledge (yet) to perfom this task properly.
    // I was able to process the data from the API and get all the appointments of the week based on the present day (they're stored in weekAppointments)
    // But I wasn't able to find a good way to render those informations in the calendar
    // I just made this static structure to represent the calendar component so I dont mess the rest of the dashboard layout structure  

    const {weekAppointments} = useContext(dataContext);

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
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                </tr>
                <tr>
                    <th>11:00</th>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                </tr>
                <tr>
                    <th>11:30</th>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                </tr>
                <tr>
                    <th>12:00</th>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                </tr>
                <tr>
                    <th>12:30</th>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                </tr>
                <tr>
                    <th>13:00</th>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                </tr>
                <tr>
                    <th>13:30</th>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                </tr>
                <tr>
                    <th>14:00</th>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                </tr>
                <tr>
                    <th>14:30</th>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                </tr>
                <tr>
                    <th>15:00</th>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                </tr>
                <tr>
                    <th>15:30</th>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                </tr>
                <tr>
                    <th>16:00</th>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                </tr>
                <tr>
                    <th>16:30</th>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                </tr>
                <tr>
                    <th>17:00</th>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                </tr>
                <tr>
                    <th>17:30</th>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                </tr>
                <tr>
                    <th>18:00</th>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                    <td><CalendarItem/></td>
                </tr>
                </tbody>

            </table>

        </div>
        </>
    )
}

export default Calendar
