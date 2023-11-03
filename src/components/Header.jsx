import React from 'react';

import Assiduus_Logo from "../assets/Assiduus_Logo.png";
import UserImage from "../assets/UserImage.png";

const Header = () => {
  return (
    <header className='header flex items-center justify-between px-5 py-2'>
        <img src={Assiduus_Logo} alt="Assiduus Logo" className='w-52 h-11'/>
        <div className='flex items-center justify-around gap-5'>
            <div className='flex items-center'>
                <button className='p-[6px] bg-[#F6F7F9] outline-none border-[#F6F7F9] rounded-l-md'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" id="search"><path fill="#000" fill-rule="evenodd" d="M14.192 15.606a7 7 0 1 1 1.414-1.414l5.172 5.172a1 1 0 0 1-1.414 1.414l-5.172-5.172ZM15 10a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z" clip-rule="evenodd"></path></svg>
                </button>
                <input type='search' placeholder="Search" className='p-[6px] bg-[#F6F7F9] outline-none border-[#F6F7F9] rounded-r-md caret-slate-900'/>
            </div>
            <div className='relative'>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" id="notification"><path fill="#000" d="M12 3a2 2 0 0 0-2 2v.341C7.67 6.165 6 8.388 6 11v5H5a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2h-1v-5a6.002 6.002 0 0 0-4-5.659V5a2 2 0 0 0-2-2zm0 18a2 2 0 0 1-2-2h4a2 2 0 0 1-2 2z"></path></svg>
                <div className='bg-[#01B877] border border-solid border-[#FFFFFF] w-[7px] h-[7px] rounded-full absolute top-[2px] right-1'></div>
            </div>
            <img src={UserImage} alt="UserImage" className='rounded-full w-10'/>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512" id="down-arrow"><path d="M98.9 184.7l1.8 2.1 136 156.5c4.6 5.3 11.5 8.6 19.2 8.6 7.7 0 14.6-3.4 19.2-8.6L411 187.1l2.3-2.6c1.7-2.5 2.7-5.5 2.7-8.7 0-8.7-7.4-15.8-16.6-15.8H112.6c-9.2 0-16.6 7.1-16.6 15.8 0 3.3 1.1 6.4 2.9 8.9z"></path></svg>
            </div>
        </div>
    </header>
  )
}

export default Header