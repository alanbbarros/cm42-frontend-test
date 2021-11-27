import React, {useEffect} from 'react'
import './calendar.css'

const Calendar = () => {

    useEffect(() =>{
        function teste(){
            let a = new Date();
            const b = new Date(2021,10,27)
            if(a > b){
                console.log('a > b');
            }
            else{
                console.log('b > a');
            }
        }
        teste();
    }, [])

    return (
        <>
        <div className='calendar-container' >
            <h2>Calendar</h2>
        </div>
        </>
    )
}

export default Calendar
