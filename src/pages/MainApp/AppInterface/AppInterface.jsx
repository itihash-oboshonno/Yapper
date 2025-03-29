import React, { useState } from 'react';
import { Outlet } from 'react-router';
import Inbox from '../components/InboxLayout/Inbox';
import Sidebar from '../components/Sidebar/Sidebar';

const AppInterface = () => {
    const [openSideBar, setOpenSideBar] = useState(false);
    return (
        <div className="flex h-screen bg-white">
            {/* Sidebar (Dashboard 1) */}
            <div className={`${ openSideBar ? 'w-36' : 'w-14' } transition-all`}>
                <Sidebar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
            </div>

            {/* Chat List (Dashboard 2) */}
            <div className="w-20 mdt:w-80 h-full border-r-2 fixed left-14 border-gray-50">
                <Outlet />
            </div>

            {/* Inbox */}
            <div className='w-full h-full fixed left-[376px]'>
                <Inbox />
            </div>
        </div>
    );
};

export default AppInterface;