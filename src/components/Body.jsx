import React from 'react'
import SideNavbar from './SideNavbar.jsx';
import Main from './Main.jsx'


const Body = () => {
  return (
    <div className='flex flex-nowrap items-start'>
        <SideNavbar/>
        <Main/>
    </div>
  )
}

export default Body