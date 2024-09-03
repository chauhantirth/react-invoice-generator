import React, { useState } from 'react';
import '../../css/PriceManager.css';

import Sidebar from './sidebar';
import Header from './header';
import AddItemCom from './addItem';
import UpdateItemCom from './updateItem';

function PriceManager(){

    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
    const [currentHome, setCurrentHome] = useState('addItem');


    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }
    
    return(
        <div className='grid-container'>
            <Header OpenSidebar={OpenSidebar}/>
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} setCurrentHome={setCurrentHome}/>
            {(() => {
                if (currentHome == 'addItem') {
                    return (
                        <AddItemCom />
                    )
                } else if (currentHome == 'updateItem') {
                    return (
                        <UpdateItemCom />
                    )
                } else {
                    return (<></>)
                }
            })()}
        </div>
    )
}

export default PriceManager;