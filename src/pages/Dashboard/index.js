import React from 'react'
import Sidebar from '../../components/Sidebar'
import Calendar from '../../components/Calendar'
import History from '../../components/History'
import './dashboard.css'

const Dashboard = () => {
    return (
        <div className='dashboard-container' >
            <div className='left' >
                <Sidebar />
            </div>
            <div className='right' >
                <Calendar />
                <History />
            </div>
        </div>
    )
}

export default Dashboard
