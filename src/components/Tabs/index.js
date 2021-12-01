import React, {useState} from 'react'
import { format, parseISO } from 'date-fns'
import './tabs.css'

const Tabs = ({history, upcoming, recent}) => {

    const [toggleValue, setToggleValue] = useState(1)

    const toggle = (index) => {
        setToggleValue(index)
    }

    return (
        <div className='tabs-container' >

            <div className='tabs-header' >
                <div onClick={() => toggle(1)} className={toggleValue === 1 ? 'tabs active-tabs' : 'tabs'} >Recent</div>
                <div onClick={() => toggle(2)} className={toggleValue === 2 ? 'tabs active-tabs' : 'tabs'} >Upcoming</div>
                <div onClick={() => toggle(3)} className={toggleValue === 3 ? 'tabs active-tabs' : 'tabs'} >History</div>
            </div>

            <div className='tabs-body' >

                <div className={toggleValue === 1 ? 'active-content' : 'content'} >
                    <div>
                        {
                            recent.map((item, index) =>{
                                return(
                                    <div>
                                        <span> {format(parseISO(item.startTime), "MM/dd/yyyy")} </span>
                                    </div>
                                )
                            })
                        }
                    </div> 
                </div>

                <div className={toggleValue === 2 ? 'active-content' : 'content'} >
                    <div className='' >
                    {
                        upcoming.map((item, index, array) =>{
                            return(
                                <div key={index} >
                                    <span> {format(parseISO(item.startTime), "MM/dd/yyyy")} </span>
                                </div>
                            )
                        })
                    } 
                    </div>

                </div>

                <div className={toggleValue === 3 ? 'active-content' : 'content'} >
                    <div className='patienthistory-container' >
                    {
                        history.map((item, index) =>{
                            return(
                                <div key={index} >
                                    <span> {format(parseISO(item.startTime), "MM/dd/yyyy")} </span>
                                </div>
                            )
                        })
                    } 
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default Tabs
