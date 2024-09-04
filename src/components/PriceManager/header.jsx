import React from "react";
// import 
//     {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
//     from 'react-icons/bs';
import IconComponent from "./IconCom";


function Header({OpenSidebar}) {
    return (
        <header className='header'>
            <div className='menu-icon'>
                {/* <BsJustify className='icon' onClick={OpenSidebar}/> */}
                <span className="icon" onClick={OpenSidebar}>
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <line x1="3" y1="12" x2="21" y2="12" />
                        <line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                </span>
            </div>
            <div>
                <h3 style={{color: "white"}}>Dashboard</h3>
            </div>
            <div className='header-left'>
                {/* <BsSearch  className='icon'/> */}
            </div>
            <div className='header-right'>
                {/* <BsFillBellFill className='icon'/> */}
                {/* <BsFillEnvelopeFill className='icon'/> */}
                {/* <BsPersonCircle className='icon'/> */}
            </div>
        </header>
    )
}

export default Header;