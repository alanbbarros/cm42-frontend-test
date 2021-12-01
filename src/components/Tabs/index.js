import React, {useState} from 'react'
import './tabs.css'

const Tabs = () => {

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
                <p>content tab 1</p>  
                </div>

                <div className={toggleValue === 2 ? 'active-content' : 'content'} >
                    <p>content tab 2</p>  

                </div>

                <div className={toggleValue === 3 ? 'active-content' : 'content'} >
                    <p>content tab 3</p>  
                </div>

            </div>
            
        </div>
    )
}

export default Tabs
