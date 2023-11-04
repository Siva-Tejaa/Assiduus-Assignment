import React,{useContext} from 'react';

import { MdDashboard, MdAccountBalanceWallet, MdContacts } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import { BiSolidUser } from "react-icons/bi";

import { Link } from 'react-router-dom';

import Context from './utils/Context';

const SideNavbar = () => {

    const navItems = [
        {
            id:1,
            name:"Dashboard",
            icon:<MdDashboard fontSize="1.4em" />
        },
        {
            id:2,
            name:"Accounts",
            icon:<MdAccountBalanceWallet fontSize="1.4em" />
        },
        {
            id:3,
            name:"Payroll",
            icon:<FaDollarSign fontSize="1.4em" />
        },
        {
            id:4,
            name:"Reports",
            icon:<IoDocumentText fontSize="1.4em" />
        },
        {
            id:5,
            name:"Advisor",
            icon:<BiSolidUser fontSize="1.4em" />
        },
        {
            id:6,
            name:"Contacts",
            icon:<MdContacts fontSize="1.4em" />
        }
    ]

  const{activeSideNav, setActiveSideNav} = useContext(Context);

    const setNav = (nav) => {
        setActiveSideNav(nav);
    }

  return (
    <aside className='w-[18rem] bg-[#FFFFFF] min-h-[100vh] pt-10'>
        {
            navItems.map((navItem) => (
                <Link to={`/${navItem?.name.toLowerCase()}`} key={navItem?.id}>
                    <div onClick={() => setNav(navItem?.name)} className={activeSideNav === navItem?.name ? 'bg-[#47B747] text-[#FFFFFF] flex items-center gap-4 text-base font-semibold p-[1rem] pl-7 cursor-pointer' : 'text-[#000000] flex items-center gap-4 text-base font-semibold p-[1rem] pl-7 cursor-pointer'}>
                        {navItem?.icon}
                        <p>{navItem?.name}</p>
                    </div>
                </Link>
            ))
        }        
    </aside>
  )
}

export default SideNavbar