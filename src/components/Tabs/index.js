import React, {useState, useEffect} from 'react'
import { format, parseISO, getHours, getMinutes } from 'date-fns'
import './tabs.css'

const Tabs = ({history, upcoming, recent}) => {

    
    useEffect(() =>{
        console.log(recent);
    }, [])

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
                    <table className='details-table' >
                        <tbody>
                        {
                            recent.map((item, index) =>{

                                let data = parseISO(item.startTime) 
                                let formatedData = format(data, "MM/dd/yyyy")
        
                                let hoursStart = getHours(data)
                                let minutesStart = getMinutes(data) ? getMinutes(data) : '00' // if the appointment starts at "X:00", transform 0 in 00 for a better display 
        
                                let hoursEnd = item.endTime ? getHours(parseISO(item.endTime)) : null
                                let minutesEnd = getMinutes(parseISO(item.endTime)) ? getMinutes(parseISO(item.endTime)) : '00'

                                return(
                                    <tr key={index} className='details-table-row'>
                                        <td>
                                            {formatedData} 
                                        </td>

                                        <td>
                                            {`${hoursStart}:${minutesStart}`} {hoursEnd ? `- ${hoursEnd}:${minutesEnd}` : ''}
                                        </td>

                                        <td>
                                            {item.type}
                                        </td>
                                        <td className={item.status === 'completed' ? 'status-column completed' : (item.status === 'absent') ? 'status-column absent' : 'status-column'}>
                                            {item.status}
                                        </td>

                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table> 
                </div>


                <div className={toggleValue === 2 ? 'active-content' : 'content'} >
                <table className='details-table' >
                    <tbody>
                        {
                            upcoming.map((item, index) =>{

                                let data = parseISO(item.startTime) 
                                let formatedData = format(data, "MM/dd/yyyy")
        
                                let hoursStart = getHours(data)
                                let minutesStart = getMinutes(data) ? getMinutes(data) : '00' // if the appointment starts at "X:00", transform 0 in 00 for a better display 
        
                                let hoursEnd = item.endTime ? getHours(parseISO(item.endTime)) : null
                                let minutesEnd = getMinutes(parseISO(item.endTime)) ? getMinutes(parseISO(item.endTime)) : '00'

                                return(
                                    <tr key={index} className='details-table-row'>
                                        <td>
                                            {formatedData} 
                                        </td>

                                        <td>
                                            {`${hoursStart}:${minutesStart}`} {hoursEnd ? `- ${hoursEnd}:${minutesEnd}` : ''}
                                        </td>

                                        <td>
                                            {item.type}
                                        </td>
                                        <td className={item.status === 'completed' ? 'status-column completed' : (item.status === 'absent') ? 'status-column absent' : 'status-column'}>
                                            {item.status}
                                        </td>

                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table> 

                </div>

                <div className={toggleValue === 3 ? 'active-content' : 'content'} >
                    <table className='details-table' >
                        <tbody>
                            {
                                history.map((item, index) =>{

                                    let data = parseISO(item.startTime) 
                                    let formatedData = format(data, "MM/dd/yyyy")
            
                                    let hoursStart = getHours(data)
                                    let minutesStart = getMinutes(data) ? getMinutes(data) : '00' // if the appointment starts at "X:00", transform 0 in 00 for a better display 
            
                                    let hoursEnd = item.endTime ? getHours(parseISO(item.endTime)) : null
                                    let minutesEnd = getMinutes(parseISO(item.endTime)) ? getMinutes(parseISO(item.endTime)) : '00'

                                    return(
                                        <tr key={index} className='details-table-row'>
                                            <td>
                                                {formatedData} 
                                            </td>

                                            <td>
                                                {`${hoursStart}:${minutesStart}`} {hoursEnd ? `- ${hoursEnd}:${minutesEnd}` : ''}
                                            </td>

                                            <td>
                                                {item.type}
                                            </td>
                                            <td className={item.status === 'completed' ? 'status-column completed' : (item.status === 'absent') ? 'status-column absent' : 'status-column'}>
                                                {item.status}
                                            </td>

                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table> 
                </div>

            </div>
            
        </div>
    )
}

export default Tabs
