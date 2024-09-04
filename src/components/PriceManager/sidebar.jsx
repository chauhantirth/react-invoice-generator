import React from 'react'
// import 
// {BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
//   BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
//  from 'react-icons/bs'

function Sidebar({openSidebarToggle, OpenSidebar, setCurrentHome}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                {/* <BsCart3  className='icon_header'/> SHOP */}
                <span style={{color: "white"}}>JAY AMBE</span>
            </div>
            {/* <span className='icon close_icon' onClick={OpenSidebar}>X</span> */}
            <span className='icon close_icon' onClick={OpenSidebar}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="icon"
                >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
            </span>
        </div>

        <ul className='sidebar-list'>
            {/* <li className='sidebar-list-item'>
                <a href="">
                    <span>Dashboard</span>
                </a>
            </li> */}
            <li className='sidebar-list-item'>
                <a onClick={() => {setCurrentHome('addItem')}}>
                    <span>Add Item</span>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a onClick={() => {setCurrentHome('updateItem')}}>
                    <span>Update Item</span>
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar