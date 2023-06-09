import './sidebar.css';
import { Link, NavLink } from 'react-router-dom';

// import Profile from '../../../../components/profile/profile';
import { FaWarehouse } from 'react-icons/fa';
import { IoCarSport } from 'react-icons/io5';
import { HiWrenchScrewdriver } from 'react-icons/hi2';
import { FiLogOut } from 'react-icons/fi';
import { VscGraphLine } from 'react-icons/vsc'
import { FaBoxes } from 'react-icons/fa'


import { useState, useEffect } from 'react';
// import Statistical from '../statistical/statistical';
export default function Sidebar() {

    const [selected, setSelected] = useState(0);

    const click1 = (selected) => {
        setSelected(selected);
    }
    return (
        <div className="sidebar3">

            {/* <Profile /> */}

            <div className="center3">
                <ul>
                    <NavLink style={{ textDecoration: 'none' }} to='/'>
                        <li title='Statistical' >
                            <VscGraphLine className='icon3' />
                            <span>Statistical</span>
                        </li>
                    </NavLink>

                    <NavLink style={{ textDecoration: 'none' }} to='/book'>
                        <li title='product'>
                            <IoCarSport className='icon3' />
                            <span>Book</span>
                        </li >
                    </NavLink>

                    <NavLink style={{ textDecoration: 'none' }} to='/book-lines'>
                        <li title='product'>
                            <IoCarSport className='icon3' />
                            <span>Book line</span>
                        </li >
                    </NavLink>

                </ul>

            </div>

            <div className='logout3' title='log out'>
                {/* <FiLogOut className='iconlogout3' /> */}
                <button onClick={() => {
                    localStorage.clear()
                    window.location.href = "http://localhost:3000/"
                }}>
                    <div className='logoutWrap3'>
                        <FiLogOut className='iconlogout3' />
                        Log Out
                    </div>
                </button>
            </div>

        </div>
    )
}