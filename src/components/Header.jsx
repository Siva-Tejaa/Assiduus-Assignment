import React, {useContext} from 'react';

import { MdNotifications } from "react-icons/md";
import { BsFillCaretDownFill } from "react-icons/bs";
import { HiOutlineSearch } from "react-icons/hi";

import Assiduus_Logo from "../assets/Assiduus_Logo.png";
import UserImage from "../assets/UserImage.png";

import { Link } from 'react-router-dom';

import Context from './utils/Context';

const Header = () => {

  const{activeSideNav, setActiveSideNav} = useContext(Context);

  return (
    <header className='header flex items-center justify-between px-5 py-2'>
        <Link to="/" onClick={() => setActiveSideNav("Dashboard")}><img src={Assiduus_Logo} alt="Assiduus Logo" className='w-48 h-10'/></Link>
        <div className='flex items-center justify-around gap-5'>
            <div className='flex items-center'>
                <button className='p-[6px] bg-[#F6F7F9] outline-none border-[#F6F7F9] rounded-l-md'>
                    <HiOutlineSearch color="#000000" fontSize="1.5em"/>
                </button>
                <input type='search' placeholder="Search" className='p-[6px] bg-[#F6F7F9] outline-none border-[#F6F7F9] rounded-r-md caret-slate-900'/>
            </div>
            <div className='relative'>
                <MdNotifications color="#000000" fontSize="1.5em"/>
                <div className='bg-[#01B877] border border-solid border-[#FFFFFF] w-[7px] h-[7px] rounded-full absolute top-[2px] right-1'></div>
            </div>
            <img src={UserImage} alt="UserImage" className='rounded-full w-10'/>
            <BsFillCaretDownFill color="#000000" fontSize="1.2em"/>
        </div>
    </header>
  )
}

export default Header