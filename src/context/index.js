import React, {createContext, useState, useEffect} from 'react';
import api from '../services/api'

export const dataContext = createContext();

const ContextProvider = ({children}) => {

    const [appointmentsInfo, setAppointmentsInfo] = useState(null)
    const [weekAppointments, setWeekAppointments] = useState([])
    const [patientsInfo, setPatientsInfo] = useState(null)



    return (
        <dataContext.Provider
        value={{
            appointmentsInfo,
            setAppointmentsInfo,
            patientsInfo,
            setPatientsInfo,
            weekAppointments,
            setWeekAppointments
        }}>
            {children}
        </dataContext.Provider>
    )
}

export default ContextProvider
