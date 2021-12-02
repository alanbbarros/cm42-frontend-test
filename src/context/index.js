import React, {createContext, useState} from 'react';

export const dataContext = createContext();

const ContextProvider = ({children}) => {

    const [appointmentsInfo, setAppointmentsInfo] = useState(null) //All the information received from api.get('/appointments')
    const [weekAppointments, setWeekAppointments] = useState([])   //All the appointments of the current week (monday to friday)
    const [patientsInfo, setPatientsInfo] = useState(null)         //All the information received from api.get('/patients')

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
